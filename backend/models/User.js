const mongoose=require("mongoose")

//define the user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

    ,

readingGoal: {
  type: Number,
  default: 12
},

booksRead: {
  type: Number,
  default: 0
},

points: {
  type: Number,
  default: 0
},

badges: {
  type: [String],
  default: []
}


    
})

//create user model
const User=mongoose.model("User",userSchema)

module.exports=User