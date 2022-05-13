import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let res = await(await fetch(`https://api-xzn-yotsuya.up.railway.app/docs/gfx1?name=${args[0]}`)
  if(!args[0]) throw `Linknya mana?`
conn.sendHydrated(m.chat, `*「 GFX MAKER 」*\n\n*💻 Username:* ${args[0]}`, null, res, `youtube.com/c/LeonGanz`, '🌎 U R L', null, null, [[null,null],[null,null],[null,null]], m)
}
handler.help = ['gfx1 <namakalian>]
handler.tags = ['gfx']
handler.command = /^gfx1$/i
export default handler