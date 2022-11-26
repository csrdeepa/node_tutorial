// console.log("Hi");
// const g=require('./One');

// var obj=new g.myClass("Deepa");
//  obj.myFunc();

// CoreModule
const http=require('http');
const path=require('path');

const fs=require('fs');

const app=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        //  res.end('<h1>HomE</h1>');
        fs.readFile(path.join(`${__dirname}/Main/Home.html`),'utf8',(err, data)=>{
            if(err){throw err}
            res.end(data);
        })

    }
    if(req.url==='/service'){
    //  res.end('<h1>Service</h1>');
    fs.readFile(path.join(`${__dirname}/Main/Service.html`),'utf8',(err, data)=>{
        if(err){throw err}
        res.writeHead(200, {'Content-type':'text/html'})
        res.end(data);
    })

    }
    if(req.url==='/test'){
    //  res.end('<h1>TEST</h1>');
    const x=[{id:1, name:'mohan'}];
    res.writeHead(200, {'Content-type':'application/json'})
    res.end(JSON.stringify(x));
    }
    
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Hi!!!! server started ${PORT}`);
})