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
        console.log('DATA',template.generate())

        // Send email

        return emailService.send({
            to: template.to || to,
            from: config.fromEmail,
            subject: template.subject(),
            html: template.generate(),
        })
    };

    return {
        sendEmail
    }
})();