var fs= require('fs');
var bf=fs.readFileSync(process.argv[2]);
var str= bf.toString();
myArr=str.split('\n');
rLength=myArr.length - 1;
console.log(rLength);
