import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import cors from 'cors'
import { newsRoutes } from './Routes/newsRoutes.js'
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("server active")
})

app.use("/", newsRoutes)

app.listen(3000, () => {
    console.log("server is active on 3000")

    connect(process.env.URI).then(() => console.log("connected to the mongodb"))
})