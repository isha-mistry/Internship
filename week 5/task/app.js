const express = require('express');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolisttask"
});

app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/registration', (req, res) => {
  res.render('registration.ejs');
});

app.get('/todo', (req, res) => {
  con.query(`SELECT * from todolist`, [], (err, result)=> {
    res.render('todolist.ejs', { todoTasks: result });
  })
  
});

app.post('/get_registration_data', (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const number = req.body.number;
  const password = req.body.password;
  const confirm_pass = req.body.confirm_pass;
  console.log(name);
  
  if(password === confirm_pass){
    const salt = bcrypt.genSaltSync(10);
    const hash_password = bcrypt.hashSync(req.body.password, salt);

    con.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      } 
      console.log('Connected to the MySQL server.');

      con.query(`INSERT INTO registration (name, username, email, number, password) values(?, ?, ?, ?, ?)`,
      [
        name,
        username,
        email,
        number,
        hash_password
    ])
    res.redirect('/');
    });
  } else{
    res.send('password does not match');
  }

});

app.post('/get_login_data', (req, res) => {
  const email = req.body.login_username;
  const password = req.body.login_password;

  console.log(email);
  console.log(password);

  if(email && password){
    con.query(`SELECT * FROM registration where email = ?`, [email], (err, result) => {
      if(err) throw err;
      if(result.length >0){
        const user = result[0];
        console.log(user);

        bcrypt.compare(password, user.password, (err, data) => {
          console.log(data);
          if(err) throw err;
          if(data === true){
            res.redirect('/todo');
          } else{
            res.send("incorrect email or password");
          }
        });
      } else{
        res.send("No such mail id found");
      }
    });
  } else{
    res.send("mail id or password is null or incorrect");
  }
});  

app.post("/insert_task", (req, res) => {
  const content = req.body.content;
  con.query(`INSERT INTO todolist (content) values(?)`,[content])
 
  res.redirect('/read_task');
})

app.get("/read_task", (req, res) => {
  con.query(`SELECT * FROM todolist`, [], (err, result) => {
    if(err) throw err;

    if(result.length >0){
      res.render("todolist.ejs", {todoTasks: result });
    }  
  });
});

app.get("/remove/:id", (req, res) => {
  const id = req.params.id;
  
  con.query(`DELETE FROM todolist where id = `+id, [], (err, result) => {
    if(err) throw err;
    res.redirect("/todo");
  }); 
});

app.get("/edit/:id" , (req, res) => {
  const id = req.params.id;

  con.query(`SELECT * FROM todolist`, [], (err, result) => {  
    if(err) return res.send(err);
    res.render("todoEdit.ejs", { todoTasks: result, idTask: id });
  });
});

app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const content = req.body.content;

  con.query(`UPDATE todolist SET content = ? where id=`+id, [content], (err, result) => {
    if (err) return res.send(err);
    res.redirect("/todo");
  });

});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
