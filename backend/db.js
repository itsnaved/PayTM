require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


const UserSchema= new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type:String,
        required:true,
        trim: true,
        minLength: 3,
        maxlength: 30
    },
    lastName: {
        type:String,
        required:true,
        trim: true,
        minLength: 3,
        maxlength: 30
    }
})   

const User= mongoose.model('User', UserSchema);

module.exports={
    User
};