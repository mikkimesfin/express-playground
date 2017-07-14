var express = require('express')
var app = express()

app.get("/math/pi", function(request, response) {
  var pi= String(Math.PI)
  response.send(pi)
})

app.get("/math/calculate", function(request, response) {
console.log(request.query)
var operation = request.query.operation
var x = parseInt(request.query.x)
var y = parseInt(request.query.y)
if (operation == "add") {
  response.send(String(x+y))
}
console.log(x+y)
})
app.listen(8080)

module.exports = {
  app: app
}
