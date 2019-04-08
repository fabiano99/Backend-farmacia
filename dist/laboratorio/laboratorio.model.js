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
exports.laboratorioSchema = new mongoose_1.default.Schema({
    nome: {
        type: String,
        required: true
    },
    razaoSocial: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    }
});
exports.Laboratorio = mongoose_1.default.model('Laboratorio', exports.laboratorioSchema);
