const nodemailer = require('nodemailer');

// const sendMail = async(req, res) => {
    // let testAccount = await nodemailer.createTestAccount();

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
        from: '"Isha" <ishamistry.lamprostech@gmail.com>', // sender address
        to: "ishamistry.lamprostech@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<table border='1px'><tr><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td></tr></table>", // html body
  }

  transporter.sendMail(info, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
})

//   console.log("Message sent: %s", info.messageId);
//   res.send(info);
// };

// module.exports = sendMail;