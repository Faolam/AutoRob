module.exports.run = async (bot, msg, args) => {
  msg.channel.send(`Deu certo ${msg.author}`)
}
module.exports.help = {
  name: "help",
  category: "Help Message" 
}