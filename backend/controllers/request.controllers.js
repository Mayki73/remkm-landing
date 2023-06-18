const nodemailer = require("nodemailer");

// Create a transporter using your Yandex Mail SMTP credentials

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.YANDEX_USERNAME,
      pass: process.env.YANDEX_PASSWORD,
    },
  });
  const { phone, answers } = req.body;

  const subject = `Новая заявка из REMKM`;

  const mailOptions = {
    from: process.env.YANDEX_USERNAME,
    to: "serviscoffee@yandex.ru", //serviscoffee@yandex.ru
    subject: subject,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
        body {
            font-family: Arial, sans-serif;
          }
        span {
            font-weight: bold;
        }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
      <div class="container">
      <h1>Новая заявка из REMKM</h1>
      <p><span>Дата:</span> ${new Date().toLocaleString()}</p>
      <p><span>Телефон:</span> ${phone}</p>
      <p><span>Результат теста:</span> ${answers ? answers : "-"}</p>
        <p>С уважением, REMKM</p>
    </div>
      </body>
    </html>
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("");
    } else {
      console.log("Email sent successfully:", info.response);
      return res.status(200).send("Ваши данные успешно отправлены!");
    }
  });
};

module.exports = {
  sendEmail,
};
