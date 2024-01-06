const mongoose=require('mongoose')
 const employeeSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,

    }
 )
 const Employeemodules=mongoose.model("employees",employeeSchema)
 model.exports=Employeemodules