const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('aradiab0t 0nline 0u0');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

var comment_box_cID = '390709196795936788';
var comment_box_sub_cID = '390717626420166669';

var admin_roleID = '351594043337342978';

client.on('message', function (user, userID, channelID, message, evt) {
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
