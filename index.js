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
mongoose.connect("mongodb+srv://naeem66241:oZb0CvnrAS2US687@cluster0.1b8ltkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {   
    
})
.then(()=> console.log(`DB connected`))
.catch((err)=> console.log(err));


const ChannelModel = require("./channelModel")

app.post("/add-channel", async(req, res)=>{
    try{
     const newChannels = new ChannelModel(req.body)
     const result = await newChannels.save()
     if(result){
        return res.status(200).json({result, message: "channel data add successfully."})
     }
    } catch(e){
       return res.status(400).json({message: e})
    }
})

app.get("/get-channel", async(req, res)=>{
    try{
        const result = await ChannelModel.find()
        if(result){
          return  res.status(200).json({result})
        }
       } catch(e){
          return res.status(400).json({message: e})
       }
})
app.listen(5000);