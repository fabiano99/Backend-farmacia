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
exports.vendaSchema = new mongoose_1.default.Schema({
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    funcionario: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    produto: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    desconto: {
        type: Number
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    troca: {
        type: mongoose_1.Schema.Types.ObjectId,
    }
});
exports.Venda = mongoose_1.default.model('Venda', exports.vendaSchema);
