import { Schema,model } from "mongoose";

const dataSchema = new Schema({
    country : String,
    headline : String,
    description:String,
    image:String
},{
    versionKey:false
})

export const Data = model("datas",dataSchema)