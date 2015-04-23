var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
    name:  String,
    author: String,
    created: { type: Date, default: Date.now },
    active:  Boolean,
    question: String
});

module.exports = mongoose.model('Survey', surveySchema);
