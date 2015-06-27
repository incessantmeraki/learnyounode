var result=[]
var count=0
var http=require('http')
var bl=require('bl')

function print(){
  for(var i=0;i<3;i++){
    console.log(result[i])
  }
}


function myHttp(index){
  http.get(process.argv[2+index],function(response){
    response.pipe(bl(function(err,data){
      if(err)
        console.error(err)
      result[index]=data.toString()
      count++
      
      if(count==3)
        print()
    }))
  })
}

for(var i =0; i<3; i++)
  myHttp(i)


