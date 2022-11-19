const express=require('express');
const port=8000;
const app=express();

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log("error at connceting to server", err);
    }
    console.log('server is connected at port:', port);
})