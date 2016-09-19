/**
 * Created by ARNAB on 9/7/2016.
 */
var fs=require('fs');

exports.get=function (req,res) {
    console.log("Sending the data back");
    var event=fs.readFileSync("app/data/event/"+req.params.id+".json", 'utf8');
    res.status(200).send(event);
};

exports.save=function (req,res) {
    var event=fs.readFileSync("app/data/event/"+req.params.id+".json", 'utf8');
    res.setRequestHeader('Content-type','application/json');
    res.send(event);
};