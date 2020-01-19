const express = require('express');

const router = express.Router();

const userapp = require('../Services/user')

router.get('/getdetails/:id',function(req,res){
    userapp.getdetails(req.params.id).then(function(result){
        res.send(result);
    }).catch(function(error){
        res.send(error);
    })
})

router.post('/register',function(req,res,next){
     userapp.register(req.body).then(function(result){
         res.send(result);
     }).catch(function(error){
         next(error)
     })
})

router.put('/update',function(req,res,next){
    userapp.update(req.body).then(function(result){
        res.send(result);
    }).catch(function(error){
        next(error);
    })

})

router.delete('/delete/:id',function(req,res){
    userapp.delete(req.params.id).then(function(result){
        res.send(result);
    }).catch(function(error){
        res.send(error);
    })
})
router.post('/login',function(req,res,next){
    userapp.login(req.body).then(function(result){
        res.send(result);
    }).catch(function(error){
        next(error);
    })
})

module.exports = router;
