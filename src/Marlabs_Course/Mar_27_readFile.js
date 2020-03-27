var fs = require('fs');

fs.readFile('Mar_27.txt',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log("Async data os :" + data);
    }
});

var data = fs.readFileSync("Mar_27.txt");
console.log("Stnc data is :" + data.toString())
