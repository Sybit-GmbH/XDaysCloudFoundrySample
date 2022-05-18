const express = require('express')
const fetch = require('node-fetch')

var log = require("cf-nodejs-logging-support");
log.setLoggingLevel("info");

const app = express()
app.use(log.logNetwork);

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  req.logger.info("Fetching random cat image");
  const host = "https://cataas.com"
  
  const catRes = await fetch(`${host}/cat?json=true`)
  const cat = await catRes.json()
  req.logger.info(cat.url, cat.tags, cat.id);

  const imgRes = await fetch(`${host}${cat.url}`)
  const img = await imgRes.buffer()

  res.setHeader('Content-Type', 'image/jpg')
  res.send(img)
})

app.listen(PORT, () => {
  log.info(`Example app listening on port ${PORT}`)
})
