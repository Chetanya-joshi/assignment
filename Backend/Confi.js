const mongoose = require('mongoose')
const db="mongodb+srv://hotelsite:hotel123@cluster0.ewncd00.mongodb.net/hotelsitework?retryWrites=true&w=majority"
module.exports= mongoose.connect(db)
.then(()=>{
    console.log("yes connected suessfully")
}).catch((err)=>{
    console.log("something happens wrong so no connection")
})
        