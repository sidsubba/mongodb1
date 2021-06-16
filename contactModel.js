var mongoose = require('mongoose');

var exampleSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:true

    },
    place:
    {
        type:String,
        required:true
    }
});
var Contact=module.exports=mongoose.model('contact',exampleSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}