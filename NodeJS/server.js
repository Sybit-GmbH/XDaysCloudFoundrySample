const express = require('express')
const fetch = require('node-fetch')
const jimp = require('jimp') ;

var log = require("cf-nodejs-logging-support");
log.setLoggingLevel("info");

const app = express()
app.use(log.logNetwork);

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const CF_INSTANCE = process.env.CF_INSTANCE_INDEX || 'N/A';
  req.logger.info("Fetching random cat image on Instance: " + CF_INSTANCE);
  const host = "https://cataas.com"
  
  const catRes = await fetch(`${host}/cat?json=true`)
  const cat = await catRes.json()
  req.logger.info(cat.url, cat.tags, cat.id);

  const imgRes = await fetch(`${host}${cat.url}`)
  const img = await imgRes.buffer()
  const font = await jimp.loadFont(jimp.FONT_SANS_32_WHITE)
  const jimpImg = await jimp.read(img)
  jimpImg.print(font, 10, 10, `CF Instance: ${CF_INSTANCE}`)

  res.setHeader('X-Cf-App-Instance', CF_INSTANCE)
  res.setHeader('Content-Type', 'image/jpg')

  res.send(await jimpImg.getBufferAsync('image/jpeg'))
})

app.listen(PORT, () => {
  log.info(`Example app listening on port ${PORT}`)
})
