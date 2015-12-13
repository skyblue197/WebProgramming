var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var schema = new Schema({
  email: {type: String, required: true, trim: true},
  numComment: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
  question: {type: String, trim: true},
  view1: {type: String, trim: true},
  view2: {type: String, trim: true},
  view3: {type: String, trim: true},
  view4: {type: String, trim: true},
}, {
  toJSON: {virtuals: true },
  toObject: {virtuals: true}
});

var Post = mongoose.model('Post', schema);

module.exports = Post;
