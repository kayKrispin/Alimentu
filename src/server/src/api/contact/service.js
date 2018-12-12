const config  = require('../../config');
const emailService = require('../../services/email');
const templates =  require('./emailTemplates');

module.exports = ( () => {

    const sendEmail = ({
        to,
        tamplateId,
        data,
    }) => {

        const template = templates[tamplateId];

        if (!template) {
            throw Error('Not a valid templateId');
        }
        console.log('DATA',data)

        // Send email

        return emailService.send({
            to: template.to || to,
            from: config.fromEmail,
            subject: template.subject(),
            html: template.generate(data),
        })
    };

    return {
        sendEmail
    }
})();