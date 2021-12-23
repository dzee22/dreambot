function handler(m) {
  this.sendContact(m.chat, '6282146176911', this.getName('6282146176911@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
