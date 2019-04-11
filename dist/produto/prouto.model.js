"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
exports.produtoSchema = new mongoose_1.default.Schema({
    codProduto: {
        type: Number,
        required: true
    },
    nomeProduto: {
        type: String
    },
    descricao: {
        type: String
    },
    dosagem: {
        type: String,
        required: true
    },
    gtinEAN: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    registroMs: {
        type: String,
        required: true
    },
    fator: {
        type: String
    },
    lab: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false
    },
    principioAtivo: {
        type: String,
        required: true
    },
    restricao: {
        type: Boolean,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});
exports.Produto = mongoose_1.default.model('Produto', exports.produtoSchema);
