const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: "servicecoffee.5upport@yandex.ru",
      pass: "Anton7391824",
    },
  });
  const { phone, answers } = JSON.parse(event.body);

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

  // try {
  const response = transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return {
        statusCode: 500,
        body: "Произошла ошибка!",
      };
    }
    return {
      statusCode: 200,
      body: "Ваши данные успешно отправлены!",
    };
  });

  return response;
  // } catch (error) {
  //   return {
  //     statusCode: 500,
  //     body: "Произошла ошибка!",
  //   };
  // }
};
