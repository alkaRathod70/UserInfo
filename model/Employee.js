const mongoose=require('mongoose');

const modelSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

const Emplyoueemodule=mongoose.model("employees",modelSchema)

module.exports = Emplyoueemodule