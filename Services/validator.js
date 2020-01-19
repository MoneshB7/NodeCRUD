const dbcompiler = require('../Database/dbcompiler');

var validations = {};


validations.Check1 = function(details){

    if(details.teamSize >=3)
    {
        return false;
    }
    else{

        return true;
    }
}

validations.Check2 = function(details){

    let contact = (details.contactNo).toString()

    if(contact.length != 10)
    {
        return true;
    }    
    else{

        return false;
    }
}

validations.Check3 = function(details){

    let theme = (details.theme).toLowerCase()

    if(theme !='robotics' && theme !='smart vehicles' && theme !='waste management')
    {
        return true;
    }
    else
    {
        return false;
    }

}

module.exports = validations;