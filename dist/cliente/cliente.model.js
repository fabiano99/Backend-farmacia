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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    }
});
exports.Cliente = mongoose_1.default.model('Cliente', clienteSchema);
