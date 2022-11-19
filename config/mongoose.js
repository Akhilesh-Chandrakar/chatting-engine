const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;
db.on('error', console.error.bind(console, "error connnecting to mongodb"));
db.once('open', function(){
    console.log("connected to mongodb");
})
module.exports=db;