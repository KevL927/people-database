var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    favoriteCity: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('People', PeopleSchema);
