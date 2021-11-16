var http = require('http');


var server = http.createServer((req,res)=>{

  server.get('/studdetails',(req,res)=>{
   res.send("all students name fetched");
   
  })

})


server.listen(8000,()=>{
    console.log("server running on port 8000");
})
