const mongoose = require('mongoose');

/**
 * Contact Schema
 * @private
 */
const QuestionSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
  Title: { type: String,require:true },
  Description:{type:String,require:true},
}, { timestamps: true }
);

/**
 * @typedef QuestionSchema
 */
module.exports = mongoose.model('Question', QuestionSchema);