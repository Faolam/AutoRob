const config = require('../../Config/config.json')

module.exports = (client, msg) => {
  if (msg.author.bot) return;
  
  if (!msg.content.startsWith(`${config.prefix}`)) return;

  
  const args = msg.content.slice(config.prefix.length).split(" ");
  let command = args.shift().toLowerCase()

  command = client.commands.get(command)

  if (command === undefined) return;

  console.log(command)

  command.run(client, msg, args)
}