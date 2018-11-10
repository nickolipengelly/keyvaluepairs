const mongoose = require('mongoose');
const {Schema} = mongoose;

const userInfoSchema = new Schema({
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
        required: true,
        unique: true,
        lowercase: true
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
    like:[{
        type: String,
    }],
    dislike:[{
        type: String,
    }],
    experience:{
        type: String,
    },
    spokenLanguage:[{
        type: String
    }],
    teacher:{
        type: Boolean,

    },
    student:{
        type: Boolean,
    },
    bio:{
        type: String
    }
});

module.exports = mongoose.model('UserInfo',userInfoSchema);