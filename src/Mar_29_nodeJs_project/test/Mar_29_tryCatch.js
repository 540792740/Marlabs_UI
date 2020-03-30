var fs = require('fs');

console.log("Before Eoor");
try {
    var data = fs.readFileSync("a.txt");
    console.log(data)
}
catch(err){
    console.log("FIle not found")
}
finally {
    console.log("In finally")
}