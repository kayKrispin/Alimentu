require('dotenv').config({path:'C:/Users/User/Desktop/alimentu/src/server/.env'})


module.exports = {
    facebookAppId: process.env.REACT_APP_FACEBOOK_APP_ID,
    googleAppId:process.env.REACT_APP_GOOGLE_APP_ID,
    facebookAppSecret: process.env.REACT_APP_FACEBOOK_APP_SECRET,
    oauthRedirectUrl:process.env.REACT_APP_OAUTH_REDICRECT_URL,
    jwt_secret: 'fuck_you_kaec',
    sendgridApiKey:process.env.REACT_APP_SENDGRID_API_KEY,
    fromEmail:process.env.REACT_APP_FROM_EMAIL,
};
