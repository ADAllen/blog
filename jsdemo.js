var fs = require('fs')
var dirName = process.argv[2]
fs.mkdirSync("./" + dirName) 
 process.chdir("./" + dirName) 
 fs.mkdirSync('css') 
 fs.mkdirSync('js') 

 fs.writeFileSync("./index.html", "<!DOCTYPE>")
 fs.writeFileSync("./index.html", "<title>Hello</title>")
 fs.writeFileSync("./index.html", "<h1>Hi</h1>")
 fs.writeFileSync("css/style.css", "h1{color: red;}")
 fs.writeFileSync("./js/main.js", "var string = "Hello World" ")
 fs.writeFileSync("./js/main.js", " alert(string)")

 process.exit(0)