const mongoose = require('mongoose');

/**
 * User Schema
 * @private
 */
const UserSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String, unique: true },
    Password: { type: String },
    isVerified: { type: Boolean },
    emailToken: { type: String },
    image: { type: String }
}, { timestamps: true });
/**
 * @typedef User
 */

module.exports = mongoose.model('User', UserSchema);