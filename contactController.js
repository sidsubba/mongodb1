let Contact = require('./contactModel');

exports.index=function(req,res)
{
    Contact.get(function(err,contacts)
    {
        console.log("here");
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.new =function(req,res)
{
    var contact=new Contact();
    contact.name=req.body.name;
    contact.place=req.body.place;
    contact.save(function(err)
    {
        if(err)
        res.json(err);
 res.json({
     message:"new data ",
     data:contact
 });
    });
   
};

exports.view= function(req, res)
{
    console.log("sandeep");
   Contact.findById({ _id: req.params.contact_id}, function(err, contact)
   {
       if(err)
       res.json(err);
  res.json({
      message:"updated ",
      data:contact
  }) ;    
   });
};