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

var comment_box_cID = '390709196795936788';
var comment_box_sub_cID = '390717626420166669';

var admin_roleID = '351594043337342978';

client.on('message', message => {
    // If they post in #comment-box, and they AREN'T an admin.
	if (message.channel.id === comment_box_cID) {
    //if (channelID == comment_box_cID && !(message.author.hasRole(admin_roleID))) {
        var new_message = message.author.username+" submitted the following comment:\n"+message.content;
       
        client.send(new_message, {
                    to: comment_box_sub_cID
        });
		
		message.delete();
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
*/
