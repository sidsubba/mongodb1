let Contact1 = require('./contactModel');

exports.index=function(req,res)
{
    Contact1.get(function(err,contacts)
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
    var contact1=new Contact1();
    contact1.name=req.body.name;
    contact1.place=req.body.place;
    contact1.prof=req.body.prof;
    contact1.save(function(err)
    {
        if(err)
        res.json(err);
 res.json({
     message:"new data ",
     data:contact1
 });
    });
   
};

exports.view= function(req, res)
{
    console.log("sandeep");
   Contact1.findById({_id: req.params.contact_id}, function(err, contact1)
   
   {
    console.log({_id: req.params.id});
       if(err)
       res.json(err)
  res.json({
      message:"updated ",
      data:contact1
  }) ;    
   });
};
