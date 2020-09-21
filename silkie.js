const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log('Buk buk bawk!');
});

client.on('message', message => {
 var chatmsg = message.content.toLowerCase();
 if (message.author.bot) return;
 if (chatmsg.indexOf('chicken') + 1 ) {
  if (chatmsg === 'eat chicken') {
   message.reply('never.');
  } else {
   var Clucks = ['Cluck', 'Ba-kawk!', 'Cheep cheep cheep', 'Cluck cluck', 'Bwwaaaaaaaaaaaakkkkk!'];
   var randClucks = Clucks[Math.floor(Math.random() * Clucks.length)];
   message.channel.send(randClucks);
   
  }
 };
 if (chatmsg.indexOf('silkie') + 1 ) {
  if  (chatmsg.indexOf('what do i look like') + 1 ) {
   message.reply(message.author.avatarURL);
  };
  if  (chatmsg.indexOf('what can you do') + 1 ) {
   message.channel.send('I can respond to: chicken and eat chicken.');
   message.channel.send('My Silkie commands are: what do I look like, what can you do, what are you, are you a rooster or a hen, sing a song, who are your parents, tell me a joke');
  };
  if  (chatmsg.indexOf('what are you') + 1 ) {
   message.channel.send('Bwwaaaaaaaaaaaakkkkk! (An Artificial Intelligence chicken coded by CyberneticSquid as a Discord bot.)');
  };
  if  (chatmsg.indexOf('are you a rooster or a hen') + 1 ) {
   message.channel.send('Cock-a-doodle doo!');
  };
  if  (chatmsg.indexOf('sing a song') + 1 ) {
   var Songs = ['https://www.youtube.com/watch?v=Qx8ugpIMLtw', 'https://www.youtube.com/watch?v=FuIfypT7KLA', 'https://www.youtube.com/watch?v=qxDSTCaWVZY'];
   var randSongs = Songs[Math.floor(Math.random() * Songs.length)];
   message.channel.send(randSongs);
  };
  if  (chatmsg.indexOf('who are your parents') + 1 ) {
   message.channel.send('https://photorator.com/photos/images/silkie-chickens--30013.jpg');
  };
 };
});
