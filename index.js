(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const ms = require("ms")
    let https = require("https")
    const S4D_APP_MC_GET = require('minecraft-server-util');
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const S4D_APP_REDDIT_musakui = require('musakui');
    const Database  = require("easy-json-database")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.16.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.16.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    s4d.database = new Database('./database.json')

    // blockly code
    var adsfasd, randomhuuh, randomhuh, member_xp, member_level, randomm, _D1_88_D0_B0_D1_80;
    
    function listsGetRandomItem(list, remove) {
      var x = Math.floor(Math.random() * list.length);
      if (remove) {
        return list.splice(x, 1)[0];
      } else {
        return list[x];
      }
    }
    
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if ((s4dmessage.content) == 'iq мув') {
        s4dmessage.channel.send({content:String('https://media1.tenor.com/m/wHs3JITWApsAAAAd/galaxy-brain-meme.gif')});
        console.log(('iqmoveby-' + String(s4dmessage.author)));
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
            if (s4dmessage.author.bot) {
                return;
            }
              if ((s4dmessage.content) == '!в тест') {
        (s4dmessage.channel).send(String('напиши что нибудь')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         s4d.message = collected.first();
           (s4d.clients.cache.get(String('608943667897696269'))).send({content:String((s4d.reply))}).then(msg =>{
          msg.channel.awaitMessages(response => response.content, { time: (1*60*1000), max: 1,errors: ['time'] }).then(async (collected) => { s4d.reply = collected.first().content;
             return
    
           s4d.reply = null; }).catch(async (e) => { console.error(e);   return
           })
          });
    
         s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('и чо (timed out)')});
         });
        })
      }
    
        });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if ((s4dmessage.author).bot) {
        randomhuuh = ['😁', '😎', '❤️‍🔥', '👋', '🤔'];
        if (((s4dmessage.content) || '').startsWith('эй бот,' || '')) {
          s4dmessage.react((listsGetRandomItem(randomhuuh, false)));}
      } else {
        randomhuh = ['💀', '🤓', '✌️', '🥱', '🤯'];
        if (((s4dmessage.content) || '').startsWith('эй бот,' || '')) {
          s4dmessage.react((listsGetRandomItem(randomhuh, false)));} else if (((s4dmessage.content) || '').startsWith('Эй бот,' || '')) {
          s4dmessage.react((listsGetRandomItem(randomhuh, false)));} else if (((s4dmessage.content) || '').startsWith('эй, бот,' || '')) {
          s4dmessage.react((listsGetRandomItem(randomhuh, false)));} else if (((s4dmessage.content) || '').startsWith('Эй, бот,' || '')) {
          s4dmessage.react((listsGetRandomItem(randomhuh, false)));}
      }
    
    });
    
    s4d.client.on('ready', async () => {
      adsfasd = ['жоскую игру', 'Minecraft 1.20.1', 'DF Connected', 'Terraria', '🤓'];
      s4d.client.user.setPresence({status: "online",activities:[{name:(listsGetRandomItem(adsfasd, false)),type:"PLAYING"}]});
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.author).bot)) {
        member_xp = s4d.database.get(String(('опыт-' + String(s4dmessage.member.id))));
        member_level = s4d.database.get(String(('уровень-' + String(s4dmessage.member.id))));
        if (!member_xp) {
          member_xp = 0;
        } else if (!member_level) {
          member_level = 0;
        }
        s4d.database.set(String(('опыт-' + String(s4dmessage.member.id))), (member_xp + 1));
        member_xp = member_xp + 1;
        if (member_xp > 100) {
          s4d.database.set(String(('опыт-' + String(s4dmessage.member.id))), 0);
          s4d.database.set(String(('уровень-' + String(s4dmessage.member.id))), (member_level + 1));
          member_level = member_level + 1;
          s4dmessage.channel.send({content:String(([s4dmessage.author,', твой УР повышен ',member_level,'!!'].join('')))}).then(async (s4dreply) =>{
             await delay(Number(60)*1000);
            s4dreply.delete();
    
          });
        }
        if (member_level == 20) {
          s4dmessage.channel.send({content:String((['Никто так и не пришёл...','\n','Но ты, ',s4dmessage.author,' ты добился высокого УР 👑. Хоть дальше и есть уровни, это не важно, ведь 20 УР ❤️ не у всех.'].join('')))}).then(async (s4dreply) =>{
             s4dreply.react('🔪');
            s4dreply.react('👑');
            return
    
          });
          return
        }
        if ((s4dmessage.content) == '!уровень') {
          s4dmessage.channel.send({content:String(([s4dmessage.author,', твой УР: ',member_level].join('')))}).then(async (s4dreply) =>{
             await delay(Number(60)*1000);
            s4dreply.delete();
    
          });
        } else if ((s4dmessage.content) == '!опыт') {
          s4dmessage.channel.send({content:String(([s4dmessage.author,', осталось ',100 - member_xp,' до УР ',member_level + 1].join('')))}).then(async (s4dreply) =>{
             await delay(Number(60)*1000);
            s4dreply.delete();
    
          });
        }
      } else if ((s4dmessage.author).bot) {
        if ((s4dmessage.content) == '!опыт') {
          s4dmessage.channel.send({content:String('бро реально подумал что он опытный')}).then(async (s4dreply) =>{
             await delay(Number(30)*1000);
            s4dreply.delete();
    
          });
        } else if ((s4dmessage.content) == '!уровень') {
          s4dmessage.channel.send({content:String('бро реально думает что он может получать уровень')}).then(async (s4dreply) =>{
             await delay(Number(30)*1000);
            s4dreply.delete();
    
          });
        }
      }
    
    });
    
    synchronizeSlashCommands(s4d.client, [
      {
          name: 'help',
      		description: 'обновления 💎',
      		options: [
    
          ]
      },{
          name: 'онлайн',
      		description: 'показывает сколько игроков на сервере',
      		options: [
    
          ]
      },{
          name: 'описание',
      		description: 'показывает описание сервера',
      		options: [
    
          ]
      },{
          name: 'игроки',
      		description: 'показывает счётчик игроков',
      		options: [
    
          ]
      },{
          name: 'рандом',
      		description: 'дизлайк или лайк ',
      		options: [
    
          ]
      },{
          name: 'мем',
      		description: 'майнкрафт мем с реддита (плохо работает)',
      		options: [
    
          ]
      },{
          name: 'шар',
      		description: 'рандом',
      		options: [
              {
              type: 3,
        			name: 'вопрос',
        			description: 'что спрашиваешь чел',
        			required: true,
              choices: [
    
              ]
        },
          ]
      },
    ],{
        debug: false,
    
    });
    
    await s4d.client.login((process.env[String('token')])).catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'help') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (['* Обновление 2.7','\n','* не канон момент но бот работает'].join('')), ephemeral: true, components: [] });
      }
      if ((interaction.commandName) == 'онлайн') {
        let S4D_APP_MC_GET_OPTIONS = {
                timeout: 35000
            };
            S4D_APP_MC_GET.status(String('d18.gamely.pro'), Number(20111), S4D_APP_MC_GET_OPTIONS)
            .then(async (result_java) => {
                  // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: (['сейчас вапщета',' ',result_java.players.online,' ','из',' ',result_java.players.max].join('')), ephemeral: true, components: [] });
    
            });
            }
      if ((interaction.commandName) == 'описание') {
        let S4D_APP_MC_GET_OPTIONS = {
                timeout: 35000
            };
            S4D_APP_MC_GET.status(String('d18.gamely.pro'), Number(20111), S4D_APP_MC_GET_OPTIONS)
            .then(async (result_java) => {
                  // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: (['заинтересован?','\n',result_java.motd.clean].join('')), ephemeral: true, components: [] });
    
            });
            }
      if ((interaction.commandName) == 'игроки') {
        let S4D_APP_MC_GET_OPTIONS = {
                sessionID: 1,
                timeout: 35000
            };
            S4D_APP_MC_GET.queryFull(String('d18.gamely.pro'), Number(20111), S4D_APP_MC_GET_OPTIONS)
            .then(async (result_query_java) => {
                  // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: (String(result_query_java.players.list)), ephemeral: true, components: [] });
    
            });
            }
      if ((interaction.commandName) == 'рандом') {
        randomm = ['👍', '👎'];
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (listsGetRandomItem(randomm, false)), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'мем') {
    
        S4D_APP_REDDIT_musakui('Minecrafthmmm').then(async (result) => {
             // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: (result.reddit_url), ephemeral: true, components: [] });
    
        }).catch(error => console.log(error));
      }
      if ((interaction.commandName) == 'шар') {
        _D1_88_D0_B0_D1_80 = ['Нет', 'Да', 'Звёзды говорят нет', 'Звёзды говорят да', 'Наверное'];
        await interaction.reply({ content: ([interaction.options.getString('вопрос'),':','\n',listsGetRandomItem(_D1_88_D0_B0_D1_80, false)].join('')), ephemeral: false, components: [] });
      }
    
        });
    
    return s4d
})();