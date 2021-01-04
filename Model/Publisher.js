const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const publisherSchema = new Schema({
   name: String,
   location: String,
   publishedBooks: []
},
{timestamps: true});
module.exports = mongoose.model('Publisher', publisherSchema);
