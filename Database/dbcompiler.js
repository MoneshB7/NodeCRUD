const Team = require('./dbserver');

var dbmethods = {};

dbmethods.register = function(details)
{
    const newdetails = Team({
        teamId:details.teamId,
        name:details.name,
        theme:details.theme,
        contactNo:details.contactNo,
        teamSize:details.teamSize,
        edition:details.edition
    })

    return newdetails.save().then(function(result){
        return "Team Registered"
    }).catch(function(error){
        return "Error Occurred in the Database"
    })
}

dbmethods.update = function(details){
    return Team.find({contactNo:details.contactNo}).then(function(result){
        console.log(result +" hereeeeeeeeeeeeeeeeee");
        if(result.length>0){
            return Team.updateOne({ contactNo:details.contactNo},{$set:{theme:details.theme}}).then(function(result){
                    return true;
            })
        }
        else{
            return false;
        }

    }).catch(function(error)
    {
        return "Error Occured while updating"
    })
}

dbmethods.getdetails = function(id){
    return Team.find({teamId:id}).then(function(result){
        return result;
    }).catch(function(error){
        return error;
    })
}

dbmethods.delete = function(id){
    return Team.deleteOne({teamId:id}).then(function(result){
        return "Record Deleted";
    }).catch(function(error){
        return "Error Occured While Deleting";
    })
}

dbmethods.generateID = function(details){
    return Team.find().distinct('teamId').then(function(ids){
        var bId = Math.max(...ids);
        if(bId>0){
            details.teamId = bId+1;
        }
        else{
            details.teamId = 1000;
        }
        return true;

    })
}

dbmethods.login = function(details){
    return Team.find({contactNo:details.contactNo,teamId:details.teamId}).then(function(result){
        console.log(result);
        if(result.length>0){
           console.log("LoggedIn Successfully");
           return true;
        }
        else{
            return false;
        }
        
    }).catch(function(error){
        return error;
    })
}
module.exports = dbmethods;