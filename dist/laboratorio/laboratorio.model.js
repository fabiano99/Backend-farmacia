"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
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
        type: Object,
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
        required: false
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    }
});
exports.Laboratorio = mongoose_1.default.model('Laboratorio', exports.laboratorioSchema);
