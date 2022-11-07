var ejs = require('express')
var path = require('path')
var http = require('http')

var app = ejs();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:filename', (request, response) => {
    response.sendFile(path.join(__dirname + "/" + request.params.filename))
})

app.get('/css/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/css/" + request.params.file))
})

app.get('/js/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/js/" + request.params.file))
})

app.get('/projects/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/projects/" + request.params.file))
})

app.get('/projects/css/:file', (request, response) => {
    response.sendFile(path.join(__dirname + "/css/" + request.params.file))
})

app.get('/test/test', (request, response) => {
    response.send("THIS WORKS!")
})


http.createServer(
    app
    ).listen(8080);