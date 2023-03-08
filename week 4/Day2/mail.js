const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "422ba09862d770",
      pass: "1e39eb97b33485"
    }
  });

message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}
transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
})