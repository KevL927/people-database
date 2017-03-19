var mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    favoriteCity: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('People', PeopleSchema);
