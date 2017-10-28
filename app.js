const express = require('express')
const app = express()
const livereload = require('livereload')
const server = livereload.createServer();

server.watch('public');

app.use(express.static('public'))

app.listen(3000, function(){
  console.log('Server initialized..')
})