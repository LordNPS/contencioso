var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var fs = require('fs');
var filePath = './excel.tsv'
var ficheiro = fs.readFileSync(filePath, 'utf-8');
var linhas = ficheiro.toString().split("\n");
//var connection = mongoose.createConnection('mongodb://localhost/contencioso')
//autoIncrement.initialize(connection);
mongoose.connect('mongodb://localhost/contencioso');

var caso = require('./models/caso.js');
linhas = linhas.map((linha)=>{
   return linha.split('\t');
});
var headers = linhas.shift();
var descricao = linhas.shift();
var obj = {};
var finalObject=[];

linhas.forEach((linha,idx)=>{
    linha.forEach((item,idy)=>{
        obj[headers[idy]]=item;
    })
    finalObject.push(obj);
})

finalObject.forEach((item)=>{
    var newCaso = new caso();
    for(field in item){
        newCaso[field]=item[field];
    }
    console.log(newCaso);

    newCaso.save();
});
console.log("end");

