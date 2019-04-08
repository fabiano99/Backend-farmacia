"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var endereco_model_1 = require("./../endereco/endereco.model");
var clienteSchema = new mongoose_1.default.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    sexo: {
        type: Boolean,
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    end: {
        type: endereco_model_1.Endereco,
        required: true
    }
});
