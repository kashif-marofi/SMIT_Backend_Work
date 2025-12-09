const mongoose = require('mongoose');

const uri = "mongodb+srv://kashifmarofi_db_user:KKM305540@smit-backend-work.9bxnrla.mongodb.net/";

const connectDB = async ()=>{
    await mongoose.connect(uri)
}

module.exports = {
    connectDB
}