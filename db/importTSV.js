var fs = require('fs')
var ficheiro = fs.readFileSync('./db.csv');

ficheiro = ficheiro.toString('utf-8');

var linhas = ficheiro.split('\n');
var cabecalhos = linhas.shift().split('\t');

var db=[];

linhas.forEach(linha =>{
    var idx = 0;
    db.push({})
    linha.split('\t').forEach(elemento=>{
        db[db.length-1][cabecalhos[idx]]=elemento;
        idx++;
    })
})
console.log(db);
fs.writeFileSync('db.json',JSON.stringify(db));

