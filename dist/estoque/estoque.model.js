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
exports.estoqueSchema = new mongoose_1.default.Schema({
    produto: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    qtdTotal: {
        type: Number,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    }
});
exports.Estoque = mongoose_1.default.model('Estoque', exports.estoqueSchema);
