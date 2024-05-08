const mongoose= require('mongoose')
const userdata = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    state: String,
    city: String,
    dob: Date,
    gender: String


    
})
module.exports= mongoose.model('userdata',userdata);