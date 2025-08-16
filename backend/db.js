require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


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

const accountSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
})


const User= mongoose.model('User', UserSchema);
const Account= mongoose.model('Account', accountSchema);

module.exports = {
	User,
    Account
};