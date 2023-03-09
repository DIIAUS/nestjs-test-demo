const express = require('express');
const router = express.Router();
const dbCon = require("../lib/db"); 

// Display Book Page
 router.get('/',(req, res, next) => {
    dbCon.query("SELECT * FROM books ORDER BY id desc", (err ,rows) =>{
        if(err){
            req.flash('error',err);
            res.render('books', { data: ""});
        }else{
            res.render('books', { data: rows}); 
        }
    })
 })

 module.exports = router;