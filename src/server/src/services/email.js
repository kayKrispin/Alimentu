// Handle sending of email
const sendGridMail  =  require('@sendgrid/mail');
const config  =  require('../config');

sendGridMail.setApiKey(config.sendgridApiKey);

const email = () => {
    // Send an email
    const send = ({ to, from, subject, html }) => {
        return new Promise((resolve, reject) => {
            sendGridMail.send({
                to, from, subject, html,
            }, (err, res) => {
                if (err) return reject(err);
                return resolve(res);
            });
        });
    };

    return { send };
};

module.exports = email();
