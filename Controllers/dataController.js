import { Data } from '../Models/dataModel.js';


let getAllNews = async (req, res) => {
    try {
        let news = await Data.find()
        res.send(news)
    } catch (error) {
        console.log("getAll news error : ", error)
    }
}

let getNewsById = async (req, res) => {
    try {
        let product = await Data.findById({ _id: req.params.id })
        res.send(product)
    } catch (error) {
        console.log("get news by id error : ", error)
    }
}

let addNews = async (req, res) => {
    try {
        await Data.create(req.body)
        res.send("data have been added")
    } catch (error) {
        console.log("news post request error : ", error)
    }
}

let deleteNews = async (req, res) => {
    try {
        await Data.findByIdAndDelete({ _id: req.params.id })
        res.send("data has been deleted")
    } catch (error) {
        console.log("delete by id request error : ", error)
    }
}


export { getAllNews, getNewsById, addNews, deleteNews }