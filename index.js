let express = require('express');
let bodyParser =require('body-parser');
let mongoose =require('mongoose');
let apiRoutes = require("./api-routes");
const { json } = require('express');
let app=express();


app.use(express.json());


 const dotenv = require('dotenv');
 dotenv.config();
 console.log(`Your port is ${process.env.PORT}`);
var connection = process.env.CONNECTION;
mongoose.connect(connection, { useNewUrlParser: true});
console.log(`Your connection is ${process.env.CONNECTION}`);

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
   console.log("Db connected successfully")

 
 var port = process.env.PORT;

 app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running Nithya on port " + port);
 });