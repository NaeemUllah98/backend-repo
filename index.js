const express =require ("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// const connectDb = async ()=>{
//     mongoose.connect("mongodb://localhost:27017/e-dashboard");
//     const productSchema= new mongoose.Schema({});
//     const product= mongoose.model("products", productSchema);
//     const data = await product.find();
//     console.warn(data);
// }
// connectDb();
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/e-dashboard", {   
    
})
.then(()=> console.log(`DB connected`))
.catch((err)=> console.log(err));


const ChannelModel = require("./channelModel")

app.post("/add-channel", async(req, res)=>{
    try{
     const newChannels = new ChannelModel(req.body)
     const result = await newChannels.save()
     if(result){
         res.status(200).json({result, message: "channel data add successfully."})
     }
    } catch(e){
        res.status(400).json({message: e})
    }
})

app.get("/get-channel", async(req, res)=>{
    try{
        const result = await ChannelModel.find()
        if(result){
            res.status(200).json({result})
        }
       } catch(e){
           res.status(400).json({message: e})
       }
})
app.listen(5000);