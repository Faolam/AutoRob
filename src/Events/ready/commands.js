const path = require('path')
const fs = require('fs')

module.exports = (client) => {
  let Folder_Commands = path.resolve(__dirname,'../../Commands')

  fs.readdir(Folder_Commands, (err_1, folders) => {
    if (err_1) { 
      console.error(err_1)
    } else {
      folders.forEach(folder => {
        fs.readdir(`${Folder_Commands}/${folder}`, (err_2, files) => {
          if (!files[0]) {
            console.log(`A pasta ${folder} não possui arquivos!`)
          }
          files.forEach(file => {
            if (path.extname(file) === ".js") {
              console.log(`A pasta ${folder} está executando ${file}`)
              let Command_Way = require(`../../Commands/${folder}/${file}`)
              client.commands.set(Command_Way.help.name, Command_Way)
            } else {
              return;
            }
          })
        })
      })
    }
  })
}