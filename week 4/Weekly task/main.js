let fs = require("fs")
const axios = require('axios');
const nodemailer = require('nodemailer');
const users = fs.readFileSync('email.txt')
   .toString('UTF8')
   .split('\n');

console.log(users);


axios.get('https://inshortsapi.vercel.app/news?category=entertainment')
.then((objectData) => {
    // console.log(response.data)
    let userData = objectData.data;
    console.log(userData);

    let content = `
    <html>
    <head>
        <style>
            #table {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            } 
            #table td, #customers th {
                border: 1px solid #ddd;
                padding: 8px;
                }
    
            #table tr:nth-child(even){background-color: #f2f2f2;}
    
            #table tr:hover {background-color: #ddd;}
    
            #table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #1361c7;
            color: white;
            }   
        </style>
    </head>
    <body>
        <table border="1px" id="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Content</th>
                    <th>Date</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody id="table_body">`
            userData.data.map((values)=>{
                content += `<tr>
                <td style="display:none">${values.id}</td>
                <td>${values.title}</td>
                <td>${values.author}</td>
                <td>${values.content}</td>
                <td>${values.date}</td>
                <td><img height="60px" width="60px" src="${values.imageUrl}"></td>                    
            </tr>`;
            });  
        
            

    
    content +=`</tbody>
    </table></body> </html>`

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ishamistry.lamprostech@gmail.com',
            pass: 'qwrfsgfeoenrqwcb'
        },
    });
    
    let info = {
        from: '"Daily News" <ishamistry.lamprostech@gmail.com>', // sender address
        to: users, // list of receivers
        subject: "News", // Subject line
        html: content
    }
    
    transporter.sendMail(info, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
    })
})
.catch(error => {
    console.log("error "+error)
});



