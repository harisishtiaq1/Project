const mongoose = require('mongoose')
const answerSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'User' },
  questionId: {type: mongoose.Schema.Types.ObjectId,required:true,ref: 'Question' },
  comments: {type:String,require:true},
},{ timestamps: true });

module.exports = mongoose.model("Answer", answerSchema);