const emailService = require('../../services/email');

module.exports = ( () => {

    const sendEmail = ({
                           to,
                           data,
        from,
        subject,
        html,
                       }) => {

        // Send reset_password_link email

        return emailService.send({
            to:  to,
            from: from,
            subject: subject,
            html: html,
        })
    };

    return {
        sendEmail
    }
})();