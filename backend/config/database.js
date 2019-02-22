const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')


//tratar mensagens de erro
mongoose.Error.messages.general.required = "O Atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}' no campo '{PATH}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}' no campo '{PATH}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"
