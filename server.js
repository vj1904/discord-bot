const { Client, GatewayIntentBits } = require("discord.js");

require("dotenv").config();
const axios = require("axios");

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', ()=>{
    console.log('bhadwabot is online');
});


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  else if (message.content.start) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for" + url,
    });
  } else {
    message.reply({
      content: "Aur bhadwe kya haal hai.",
    });
  }
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Maa chuda");
});

client.login(TOKEN);
