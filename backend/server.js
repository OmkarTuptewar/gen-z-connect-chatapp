const express= require("express");
const dotenv= require("dotenv");
const {chats}= require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes=require("./routes/userRoutes.js");
const chatRoutes=require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const app=express()
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("running on API successfully");

});

    
dotenv.config();
connectDB();


app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);



app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000


app.listen(5000,console.log(`port running on ${PORT} `));
