import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://recoders-area.caliph.repl.co/api/husbu?apikey=FreeApi')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url, 'husbu.jpg', Suami Kartun, m, false)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler