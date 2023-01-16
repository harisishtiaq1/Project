const mongoose = require("mongoose");
const { mongo } = require("./vars");

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      keepAlive: 1,
    })
    .then(() => {
      console.log("DB is Connected");
    })
    .catch((err) => {
      console.log("err", err);
    });
  return mongoose.connection;
};
