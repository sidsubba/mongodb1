
let router = require('express').Router();

console.log("Here2");
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Nithya crafted with love!',
    });
});

var contactController = require('./contactController');
// Contact routes
console.log("here1");
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view);
    
// Export API routes
module.exports = router;