var express = require('express');
var router = express.Router();



// let datausers 
let datausers = require("../data.json")

// let datausers = [
 
 router.post('/', function(req, res, next) {
   res.status(200).json({
     'status' : 200,
     'message': 'Berhasil Get Data Users',
     'data' : datausers
   })
 });
 
router.get('/login', function(req, res, next) {
        res.status(200).json({
          'status' : 200,
          'message': 'Berhasil Get Data Users',
          'data' : datausers
        })
    });

 
 router.post('/login', function(req, res, next) {
     // ngecek username sama password
     console.log(req)
     datausers.map((item, index) => {
         // jika username dan password sama, kirim token
         if(item.username === req.body.username && item.domisili === req.body.domisili) {
           res.json({
             "message" : "login berhasil",
           })
          
         }
     })
 
     res.json({
       "message" : "username atau password salah",
     })
 })
 
 
 module.exports = router;
