const dbcompiler = require('../Database/dbcompiler');

const validator = require('./validator');

var usermethods = {};

usermethods.register = function(details)
{
    if(validator.Check1(details))
    {
        throw new Error("Check Team Size")
    }
    else if(validator.Check2(details))
    {
        throw new Error("Check Contact Length")
    }
    else if(validator.Check3(details))
    {
        throw new Error("Check Theme Details")
    }
    else{
        return dbcompiler.generateID(details).then(function(result){
            if(result){
                console.log(result)
                return dbcompiler.register(details).then((response)=>
                {
                    return response;
                }).catch(function(error){
                    return error;
                })

            }
        }).catch(function(error){
            return error;
        })

    }
}


usermethods.update = function(details){
    if(validator.Check3(details))
    {
        throw new Error("Check Theme Details")
    }
    else{
        return dbcompiler.update(details).then(function(result){
            if(result)
            {
                return "Updated Successfully"
            }
            else{
                throw new Error("Cant find record")
            } 
        }).catch(function(error){
            throw new Error("No Records Found")
        })
    }

}

usermethods.getdetails = function(id){
    return dbcompiler.getdetails(id).then(function(result){
        return result;
    }).catch(function(error){
        return error;
    })
}


usermethods.delete = function(id){
    return dbcompiler.delete(id).then(function(result){
        return result;
    }).catch(function(error){
        return error;
    })
}

usermethods.login = function(details){
    return dbcompiler.login(details).then(function(result){
        if(result)
        {
            return "LoggedIn Successfully"
        }
        else{
            throw new Error("Wrong Credentials")
        }        
    }).catch(function(error){
        throw new Error("Invalid Credentials");
    })
}


module.exports = usermethods;
