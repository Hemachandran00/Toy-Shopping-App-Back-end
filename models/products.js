const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
  "prodid":Number,
  "title": String,
  "hero": String,
  "price": Number,
  "image": String,
  "description":String
})

module.exports=mongoose.model('product',productSchema);