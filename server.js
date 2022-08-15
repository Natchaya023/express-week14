const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

//Body-parser middleware
app.use(bodyParser.urlencoded({extendeds:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.send("Home")
})

//http://localhost:4000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})