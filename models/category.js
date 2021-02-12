const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    
  "title": String,
  "hero": String,
  "image": String
})

module.exports=mongoose.model('category',categorySchema);