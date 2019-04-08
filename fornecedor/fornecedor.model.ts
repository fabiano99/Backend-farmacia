import mongoose, { Schema } from 'mongoose';

export interface Fornecedor extends mongoose.Document {
    nome: String;
    razaoSocial: String;
    endereco: Schema.Types.ObjectId;
    
}

export const fornecedorSchema = new mongoose.Schema({

})

export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor', fornecedorSchema);