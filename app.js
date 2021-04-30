let express = require("express")
let path = require("path")
let app = express()

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))
/*
app.listen(3000, () => console.log("Corriendo en 3090"))
*/

var puerto;
if(process.env.PORT) {
  puerto = process.env.PORT;
} else {
  puerto = 3000;
}

app.listen(puerto || puerto, function(){ console.log("Servidor corriendo en puerto 3000")})

/*app.listen(process.env.PORT || 3000, function(){ console.log("Servidor corriendo en puerto 3000")})*/


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})