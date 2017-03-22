var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

PeopleSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name: this.name,
    favoriteCity: this.favoriteCity
  };
}

module.exports = mongoose.model('People', PeopleSchema);
