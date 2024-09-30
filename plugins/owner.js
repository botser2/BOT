const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────────────▢
👋𝐇𝐄𝐋𝐋𝐎 ${data.pushname} 🕵️‍♂️
> *ᴛʜᴇ ʜᴇʟғᴜʟ ᴀɴᴅ ᴜsᴇʀ ʙᴏᴛ*
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪
----------------------------------------------
> Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ ᴏᴡɴᴇʀ ᴀʙᴏᴜᴛ ||
----------------------------------------------
> ɪ'ᴍ sᴀɴᴛʜᴜsʜ
> ɪ'ᴍ ғʀᴏᴍ ᴍᴀᴛᴀʀᴀ
> ɢᴇᴛ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴠɪsɪᴛ ɪɴ ᴍʏ ᴘᴇʀsᴏɴᴀʟ ᴡᴇʙsɪᴛᴇ ᴛᴏ ғᴏʟʟᴏᴡɪɴɢ ʟɪɴᴋ
  https://sp-maxx.github.io/Mr.Santhush-Website/
> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥
 https://wa.me/+94772726437?text=_Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ_ɴɪᴄᴇ_ᴛᴏ_ᴍᴇᴇᴛ_ʏᴏᴜ👻👋_
> ᴏᴡɴᴇʀ : 𝐌𝐫.Ｓᴀɴᴛʜᴜsʜ.Ｓ
╰───────────────────────▢
©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/397000a07a1deb7fad9c2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
