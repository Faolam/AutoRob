const errors = require('./Config/csl_code.json')
const Discord = require('discord.js')
const config = require('./Config/config.json')
const client = require('./utils/client')
const path = require('path')
const fs = require('fs')

client.commands = new Discord.Collection()

let dir = path.resolve(__dirname, "../src/Events")

fs.readdir(dir, (err1, folders) => {
  try {
    if (err1) {
      return console.log(`Erro "err#1" identificado: ${errors['err#1']} \nErro: ${err1}`)
    } else {
      folders.forEach(folder => {
        fs.readdir(dir + `/${folder}`, (err3, files) => {
          if (err3) {
            console.log(`Erro "err#3" identificado: ${errors['err#3']} \nErro: ${err3}`)
          } else {
            files.forEach(file => {
              if (path.extname(file) === '.js') {
                let event_arquive = require(dir + `/${folder}/${file}`)
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
    console.log(`Erro "err#2" identificado: ${errors['err#2']} \nErro: ${err2}`)
  }
})

client.login(config.token)