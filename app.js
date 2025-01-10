import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import { Data } from './Models/dataModel.js';

dotenv.config()

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("server active")
})

app.get("/news", async (req, res) => {
    try {
        let news = await Data.find()
        res.send(news)
    } catch (error) {
        console.log("getAll news error : ", error)
    }
})

app.get("/news/:id", async (req, res) => {
    try {
        let product = await Data.findById({ _id: req.params.id })
        res.send(product)
    } catch (error) {
        console.log("get news by id error : ", error)
    }
})



app.post("/news", async (req, res) => {
    try {
        await Data.create(req.body)
        res.send("data have been added")
    } catch (error) {
        console.log("news post request error : ", error)
    }
})


app.delete("/news/:id", async (req, res) => {
    try {
        await Data.findByIdAndDelete({ _id: req.params.id })
        res.send("data has been deleted")
    } catch (error) {
        console.log("delete by id request error : ", error)
    }
})


app.listen(3000, () => {
    console.log("server is active on 3000")

    connect(process.env.URI).then(() => console.log("connected to the mongodb"))
})