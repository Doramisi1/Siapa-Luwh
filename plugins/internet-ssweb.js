import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let res = await(await fetch(`https://api.lolhuman.xyz/api/ssweb?url=${args[0]}&apikey=e54205a4ca2caa368cc067bb`)).buffer()
  if(!args[0]) throw `Linknya mana?`
conn.sendHydrated(m.chat, `*「 Screenshot Web 」*\n\n*💻 Url:* ${args[0]}`, null, res, `${args[0]}`, '🌎 U R L', null, null, [[null,null],[null,null],[null,null]], m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^(ssweb)$/i
export default handler