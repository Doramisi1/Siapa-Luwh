import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let res = await(await fetch(`https://api-xzn-yotsuya.up.railway.app/docs/gfx4?name=${args[0]}&name2=${args[1]}`)).buffer()
  if(!args[0]) throw `Nama Username?`
conn.sendButton(m.chat, 'Nih Gfx nya >_<', author, res, [['done', `${usedPrefix}waifu`]], m)
}
handler.help = ['gfx4 <namakalian>']
handler.tags = ['gfx']
handler.command = /^(gfx4)$/i
export default handler