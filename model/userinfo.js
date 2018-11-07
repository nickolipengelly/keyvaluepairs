const mongoose = require('mongoose');
const {Schema} = mongoose;

const userInfoSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    age:{
        type: Number,
    },
    filename:{
        type: String
    },
    gender:{
        type: String,
    },
    programmingLanguage: [{
        type: String,
    }],
    like:{
        type: Boolean,
    },
    dislike:{
        type: Boolean
    },
    experience:{
        type: String,
    },
    spokenLanguage:[{
        type: String
    }],
    teacher:{
        type: String,

    },
    student:{
        type: String,
    },
    bio:{
        type: String
    }
});

module.exports = mongoose.model('UserInfo',userInfoSchema);