const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const auth = {
    service: 'gmail',
    auth:{
        user: 'yousefmohshallah33@gmail.com',
        pass: 'yousefmoh111**'
        // api_key: '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', 
    }
};


const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'yousefmohshallah33@gmail.com', 
        pass: 'yousefmoh111**'  
    }
});


module.exports = sendMail = (email, subject, message, cb) => {
    const mailOptions = {
      from: email,
      to: 'yshallah20@gmail.com',
      subject,
      text: message
    };
    
    transporter.sendMail(mailOptions, function(err, data){
      if (err) {
        cb(err, null)
      } else {
          cb(null, data)
      }
    });
}

// sgMail.setApiKey('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');
// module.exports = sendMail = (email, subject, message) => {
//     const mailOptions = {
//         from: email,
//         to: 'yshallah20@gmail.com',
//         subject,
//         text: message
//     };
//     sgMail.send(mailOptions, function(err, data){
//         if (err) {
//             console.log("errerrerrerrerr",err);
            
//         } else {
//             console.log("data is sended", data);
//         }
//     });
// }

