const mongoose = require('mongoose');

/**
 * Contact Schema
 * @private
 */
const ContactSchema = new mongoose.Schema({
  Name: { type: String,required:true },
  Email:{type:String,required:true},
  Message:{type:String,required:true,Createdby:{ref:"User"}}
}, { timestamps: true }
);

/**
 * @typedef Contact
 */


module.exports = mongoose.model('Contact', ContactSchema);