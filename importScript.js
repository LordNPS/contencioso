var fs = require('fs');

var caso = require('./models/caso.js');
var filePath = './excel.tsv'
var ficheiro = fs.readFileSync(filePath, 'utf-8');
var linhas = ficheiro.toString().split("\n");

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
console.log(obj);
