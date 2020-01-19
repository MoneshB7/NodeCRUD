const mongoose = require('mongoose');

const schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hackdb",{ useNewUrlParser: true, useUnifiedTopology: true } ).then(function(){
        console.log("Database Connected Successfully!");
});


const teamschema = new schema({

    teamId:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    teamSize:{
        type:Number,
        required:true
    },
    edition:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Team",teamschema);
