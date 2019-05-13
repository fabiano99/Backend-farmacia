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
exports.relatoriofuncionarioSchmea = new mongoose_1.default.Schema({
    funcionario: {
        type: mongoose_1.Schema.Types.ObjectId,
        default: undefined,
        required: true
    },
    vendas: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    data: {
        type: Date,
        required: true
    }
});
exports.RelatorioFuncionario = mongoose_1.default.model('RelatorioFuncionario', exports.relatoriofuncionarioSchmea);
