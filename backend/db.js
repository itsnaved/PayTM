const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://onlyNaved:onlyNaved@cluster0.crpfeab.mongodb.net/paytmDB");

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