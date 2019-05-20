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
        required: false,
        unique: true
    },
    telefone: {
        type: String,
        required: false,
        unique: true
    },
    sexo: {
        type: Boolean,
    },
    dataNascimento: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    end: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
exports.Cliente = mongoose_1.default.model('Cliente', clienteSchema);
