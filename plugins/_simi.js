import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch('https://xteam.xyz/simsimi?kata=${text}&APIKEY=4ea2f5b23aef889d')
        let res = await api.json()
       m.reply(res.success)
        return !0
    }
    return true
}
export default handler