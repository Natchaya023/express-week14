const http =  require('http')
const express = require('express')
const app = express()
const morgan = require('morgan')//logged

const Router  = express.Router()

const PORT = process.env.PORT || 4000
const server = http.createServer(app)
app.use(morgan('dev'))
//4.Built-in
app.use(express.json())

//1.Application-level middleware
// app.use((req,res,next)=>{
//     console.log('Time:',Date(Date.now()))
//     next()
// })

//2.Router - level middleware
Router.use((req,res,next)=>{
    console.log('This is a Router middleware')
    next()
})

//Mount the Router
app.use('/',Router)

app.get('/home',(req,res,)=>{
    //res.send("Home")
    res.json({
        message:true,
        app:"express-Routes",
    })
})

//register route
//GET:http://localhost:4000
app.get('/profile',(req,res,next)=>{
    console.log("profile")
    res.send("profile")
    next()
})

app.get('/contact',(req,res)=>{
    res.status(200).json({
        message:"Contact page"
    })
})

//http://localhost:4000/user/10
app.get('/user/:id([a-d,0-3,w-z]{4})',(req,res)=>{
    res.status(200).send(`ID is:`+ req.params.id)
})

//http://localhost:4000/user/mark/1
app.get('/user/:name/:id',(req,res)=>{
    res.status(200).send(`Name is:${req.params.name}, ID is:${req.params.id}`)
})

//http://localhost:4000/user/mark/1
app.get('/student/:name/:id',(req,res)=>{
    res.status(200).json({
        Name:req.params.name,
        ID:req.params.id,
    })
})

//http://localhost:4000
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})