const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res){
    res.sendFile(path.join(_dirname+'/dist/index.js'));
});
app.listen(process.env.PORT || 8080);