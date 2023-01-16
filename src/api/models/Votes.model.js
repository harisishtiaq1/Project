const mongoose = require('mongoose');

/**
 * Contact Schema
 * @private
 */
const VoteSchema = new mongoose.Schema({
  Userid:{createdBy:{ref:"User"}},
  Title: { type: String,require:true },
  Description:{type:String,require:true},
}, { timestamps: true }
);

/**
 * @typedef VotesSchema
 */


module.exports = mongoose.model('Votes', VoteSchema);