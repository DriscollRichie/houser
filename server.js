require('dotenv').config()
const express = require("express");
const massive = require("massive");

const app = express()
let {CONNECTION_STRING, SERVER_PORT} = process.env

async function startServer() {
  try {
   const db = await massive(CONNECTION_STRING)
   app.set('db', db)
   console.log('Connected to Massive')
   app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`))
  } catch(err) {
    console.error('startServer function failed in server.js:', err)
  }
}

startServer()