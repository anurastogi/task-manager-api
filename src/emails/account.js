const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'anudukle@gmail.com',
        subject : 'Thanks for joining in!',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'anudukle@gmail.com',
        subject : 'Goodbye!',
        text : `Goodbye ${name}! Is there anything we could have done to keep you on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}