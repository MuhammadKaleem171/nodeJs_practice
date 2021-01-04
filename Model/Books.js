const mongoose= require('mongoose');
const {Schema} = require('mongoose');


const bookSchema = new Schema({
   name: String,
   publishYear: Number,
   author: String,
   publisher: {
      type: Schema.Types.ObjectId,
      ref: 'Publisher',
      
   }
},
{timestamps: true});

module.exports = mongoose.model('Book', bookSchema);
