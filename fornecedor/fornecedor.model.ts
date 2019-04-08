import mongoose, { Schema } from 'mongoose';

export interface Fornecedor extends mongoose.Document {
    nome: String;
    razaoSocial: String;
    endereco: Schema.Types.ObjectId;
    telefone: String;
    email: String;
    status: Boolean;
    cnpj: String;

}

export const fornecedorSchema = new mongoose.Schema({
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
        type: Schema.Types.ObjectId,
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
})

export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor', fornecedorSchema);