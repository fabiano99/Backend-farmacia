import mongoose from 'mongoose';

export interface Endereco extends mongoose.Document {
    rua: String;
    cep: String;
    cidade: String;
    uf: String;
    numero: Number;
    complemento: String;
    bairro: String;
};

const enderecoSchema = new mongoose.Schema({
    rua: {
        type: String,
        required: true 
    },
    cep: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    complemento: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    }
});


export const Endereco = mongoose.model<Endereco>('Endereco', enderecoSchema);