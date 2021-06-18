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
    },
    prof:
    {
       type:String,
       required:true
}
});
var Contact1=module.exports=mongoose.model('newcontact',exampleSchema);
module.exports.get = function (callback, limit) {
    Contact1.find(callback).limit(limit);
}
