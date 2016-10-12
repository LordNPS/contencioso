var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var contenciosoSchema = new mongoose.Schema({
    idContencioso: Number,
    idAireclaim: String,
    submitted: String,
    tipoContenciosoPedido: String,
    grouposContencioso : [String],
    dataEntrada: Date,
    estado: String,
    urgencia: Number,
    eventos: [String],
    comentarios: [String],
    info: mongoose.Schema.Types.Mixed
});
//contenciosoSchema.plugin(autoIncrement.plugin, {model: 'caso', field:'idContencioso'})
module.exports = mongoose.model('caso',contenciosoSchema);

