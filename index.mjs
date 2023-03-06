import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello word by node :) ")
})


app.listen(80, () => {
    console.log("server running port 80")
})