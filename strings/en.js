var config = require('../config')

/*
** Error strings
*/
var err = {};

err.sendMsg = 'Désolé nous n\'avons pas pu envoyer votre message ! N\'Hésitez pas à me contacter directement par téléphone au 06 23 57 12 53 ou par mail sur ' + config.email + '.';
err.sendMsgUE = 'Il manque des informations';

err.reCaptcha = 'Le captcha n\'est pas valide';
/*
** Info strings
*/
var info = {};

/*
** Success strings
*/
var succ = {};

succ.sendMsg = 'Message envoyé.';


var en = {
  err  : err,
  info : info,
  succ : succ
}

module.exports = en;
