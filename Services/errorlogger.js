let fs=require("fs");

let errorlogger=(err,req,res,next)=>{

    if(err){
    fs.writeFile("./errorlogger.txt",err.stack,(err1)=>{
        if(err1){
            console.log("Error occured During Logging");
        }
        
    });

    if(err.message=="Invalid Credentials" || err.message=="No Records Found" ){
        res.status(404);
        res.send(err.message);

    }
    else{
        res.status(200);
        res.json({ "message": err.message});

    }
    

    }
}

module.exports = errorlogger;