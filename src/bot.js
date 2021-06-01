const Discord = require('discord.js')
const config = require('./Config/config.json')
const client = require('./utils/client')
const path = require('path')
const fs = require('fs')

client.commands = new Discord.Collection()

fs.readdir('./Events', (err1, folders) => {
  try {
    if (err1) {
      return console.log(`Erro interno ao "try" encontrado!\nErro: ${err1}`)
    } else {
      folders.forEach(folder => {
        fs.readdir(`./Events/${folder}`, (err3, files) => {
          if (err3) {
            console.log(`Erro em "err3" encontrado!\nErro: ${err3}`)
          } else {
            files.forEach(file => {
              if (path.extname(file) === '.js') {
                let event_arquive = require(`./Events/${folder}/${file}`)
                client.on(`${folder}`, (...something) => event_arquive(client, ...something))
              } else {
                return;
              }
            })
          }
        })
      })
    }
  } catch (err2) {
    console.log(`Erro externo ao "try" encontrado!\nErro: ${err2}`)
  }
})

client.login(config.token)