const mongoose=require("mongoose")

const passwordReset=mongoose.Schema({
    userId:{
        type:String,
    },
    resetString:{
        type:String,
    },
    createdAt:{
        type:Date,
    },
    expiresAt:{
        type:Date,
    }
},
{
timestamps:true

})

module.exports=mongoose.model('PasswordReset',passwordReset)