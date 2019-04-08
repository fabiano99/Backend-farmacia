import mongoose, { Schema } from 'mongoose';

export interface RelatorioVenda extends mongoose.Document {
    produto: Schema.Types.ObjectId[];
    qtd: Number[];
    valor: Number[];
    qtdTotal: Number;
    valorTotal: Number;
}

export const relatoriovendaSchema = new mongoose.Schema({
    produto: {
        type: Schema.Types.ObjectId,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    valor: {
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
})

export const RelatorioVenda = mongoose.model<RelatorioVenda>('RelatorioVenda', relatoriovendaSchema);