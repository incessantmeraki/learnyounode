var path= require('path');
var fs=require('fs');
myData=[];

module.exports=function(fPath,ext,callback){
  fs.readdir(fPath,function(err,files){
    if(err) return callback(err);

    for (var i=0; i < files.length; i++){
 
    if(path.extname(files[i]) === '.'+ext){
      myData.push(files[i]);
    }  
   }
   return callback(null,myData);
  })
}
    
