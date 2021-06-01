// const bot, Discord = require('../Origin/client')
const Discord = require('discord.js');
const config = require('./Config/config.json');

let menu_shard = new Discord.ShardingManager('./bot.js', { token: config.token });

menu_shard.on('shardCreate', (menu_shard) => {
  console.log("Shard iniciado com o ID :" + menu_shard.id)
});

menu_shard.spawn();