var Discord = require('discord.io');
var logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: 'MzkwNzExMzA0MzU4NDYxNDQw.DROF2Q.39YMEd6WK6XGnsXnebc3CjETFG4',
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

var comment_box_cID = '390709196795936788';
var comment_box_sub_cID = '390717626420166669';

var admin_roleID = '351594043337342978';
/*
bot.on('message', function (user, userID, channelID, message, evt) {
    // If they post in #comment-box, and they AREN'T an admin.
	if (channelID === comment_box_cID) {
    //if (channelID == comment_box_cID && !(message.author.hasRole(admin_roleID))) {
        var new_message = message.author.username+" submitted the following comment:\n"+message.content;
       
        bot.sendMessage({
                    to: comment_box_sub_cID,
                    message: new_message
        });
		
		message.delete();
     }
});
*/
