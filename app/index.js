var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var PORT = 3000;

var app = express();

app.set('vews','./views');
app.set('view engine','pug');

app.get('/',(req,res)=>
    {
        res.render('index');
    }
);

