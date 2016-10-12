var fs = require('fs')
var ficheiro = fs.readFileSync('./scriptUtils/db.json');

var content = JSON.parse(ficheiro);
console.log(content);
var delayRegEx = /3h|[Dd]elay|h/;
var cancRegEx = /\d{2}h|[Cc]anc/;
var cancelledRegEx = /[Cc]anc|mis/;
var denialRegEx = /denial/gi;

// Usar regular expressions para tentar converter o input humano de tipo de caso, nas várias categorias possíveies
content.forEach((tuplo)=>{
    if(tuplo.hasOwnProperty('typeClaim')){
        if(delayRegEx.test(tuplo.typeClaim)& !cancRegEx.test(tuplo.typeClaim)){
            tuplo.uTypeClaim = 'delay';
            tuplo.hasDelay = true;
            return;
       }
        if(cancelledRegEx.test(tuplo.typeClaim)){
            tuplo.uTypeClaim = 'cancellation';
            tuplo.hasCancellation = true;
            return;
        }
        if(denialRegEx.test(tuplo.typeClaim)){
            tuplo.uTypeClaim = 'denial';
            tuplo.hasDenial = true;
            return;
        }
    }
});
module.exports = content;


