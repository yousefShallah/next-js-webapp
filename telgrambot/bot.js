const Telegram = require('node-telegram-bot-api');

const token = "1116333225:AAFfj7NaUpQYA2TfQSL1UhaZsK1AoenMhb0";
const { message } = this.props;

var opt = {polling:true};

const bot = new Telegram(token, opt);
const photo = "https://tse1.mm.bing.net/th?id=OIP.a2Wdv-lFxS-axG93bfw-CQHaE9&pid=Api&P=0&w=244&h=164";
bot.on("message", function(msg){
    if(msg.text){
        bot.sendMessage(msg.chat.id, `${message} @${msg.from.username}`);
        // bot.sendPhoto(msg.chat.id, photo);
        // bot.sendSticker(msg.chat.id, photo);
        
        if(msg.text == "id" || msg.text == "what we are do"){
            bot.sendMessage(msg.chat.id, `sell anther products`);
        }
    }
});
