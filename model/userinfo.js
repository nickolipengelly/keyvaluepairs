const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require("bcrypt")



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
    avatar:{
        type: String
    },
    gender:{
        type: String,
    },
    selectedProgrammingOption: [{
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
    selectedLanguageOption:[{
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

userInfoSchema.pre("save", function(next){
    const user = this; 
    if (!user.isModified("password")) return next(); 
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next (err); 
        user.password = hash; 
        next(); 
    });
});

userInfoSchema.methods.checkPassword = function(passwordAttempt, cb){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return cb(err); 
        cb(null, isMatch)
    });
};

userInfoSchema.methods.withoutPassword = function (){
    const user = this.toObject(); 
    delete user.password; 
    return user; 
}

module.exports = mongoose.model('UserInfo',userInfoSchema);