const {mongoose} = require("../config/db")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"El nombre es requerido"],
        minlength:[3,"No menor a 3 caracteres"],
        maxlength:[100,"No mayor a 100 caracteres"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"El email es requerido"],
        trim:true,
        unique:[true,"Email ya registrado"],
        match:[/^[\w\.-]+@[\w]+\.[\.\w]+$/,"Email no valido"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:Number,
        default:1
    },
    profilePic:String,
    provider:{
        local:Boolean,
        facebook:Boolean,
        google:Boolean
    },
    idProvider:{
        facebook:String,
        google:String
    }
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel