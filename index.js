const Discord = require('discord.js');
const bot = new Discord.Client();

const Canvas = require('canvas');

const token = 'OTIwMTcyMjI4NjI3Mjc1Nzc3.YbgfKw.7r40wAWGlYY0cSM0i6Gs9w4bmz8';

const perfix = '?'

bot.on('ready',()=>{
    console.log('bot is acttive');
    bot.user.setActivity("❤❤", {type : "WATCHING"})
    bot.user.setStatus("idle");
});


bot.on('guildMemberAdd', async member => {

const  canvas  = Canvas.createCanvas(1080, 720);

const ctx = canvas.getContext('2d');

const background = await Canvas.loadImage('./welcome.png');
  
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.font = "30px sans-serif"

ctx.fillStyle = '#ffffff'

ctx.fillText(member.displayName, canvas.width /2.5, canvas.height / 1.8)

ctx.beginPath();
ctx.arc(125, 125, 100, 00, Math.PI * 2, true );
ctx.closePath();
ctx.clip();
 
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png'}));

ctx.drawImage(avatar, 50, 50, 200, 200)


const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');

bot.channels.cache.get("856989876432011336").send(`*** Welcome To Night Vison 😁😀 ***,  ${member}` ,  attachment)

})


bot.on('message', Message =>{
    let arge = Message.content.substring(perfix.length).split(" ")

    if(Message.content.startsWith(perfix)) {
        if (arge[0] === "fix"){
            Message.reply("Are Fixe :)")
        }

        if(arge[0] === "help"){
            const help = new Discord.MessageEmbed()
            .setColor('#00FF2A')
	.setTitle('ID Pay')
	.setURL('https://idpay.ir/msoldatok')
	.addFields(
		{ name: 'Night Vison Custom Gun payment', value: 'Pricees👇🏻' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skin Pak(4gun to up)', value: 'Each Gun 20T', inline: true },
		{ name: 'Single Weapon ', value: 'Each Gun 30T', inline: true },
	)
	.addField('Skin Pak With attach', 'Each One 25T', true)
	.setImage('https://media.discordapp.net/attachments/857365085978755083/916779295488225340/standard.gif')
    .setFooter(Message.author.username, Message.author.avatarURL())
	.setTimestamp()
            Message.channel.send(help)

        }


        if(arge[0] === "clear") {
            if(arge[1]) {
                if (Message.member.hasPermission("MANAGE_MESSAGES"))  {
                    if (Message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                        let number = arge[1]
                        number++
                        Message.channel.bulkDelete(number)
                        
                        
                        const result = new Discord.MessageEmbed()
                        .setTitle("Message Deleted😈")
                        .addField("Message pak shod!!  tedad =>", arge[1])
                        .setFooter("in Payam Be sorat Khod kar Pak mishavad !!")
                        .setColor("#ff0000")
                        Message.channel.send(result).then(msg => {
                            function autodel() {
                                msg.delete()
                            }
                            setTimeout(autodel, 3 * 1000)
                        })
                    }
                }
            }
        }

        if(arge[0] === "test"){
            bot.emit('guildMemberAdd', Message.member);
        }
    }
})

bot.login(token)