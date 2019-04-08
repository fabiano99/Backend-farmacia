import mongoose, { Schema } from 'mongoose';

export interface Cliente extends mongoose.Document {
    nome: String;
    cpf: String;
    telefone: String;
    sexo: Boolean;
    dataNascimento: Date;
    status: Boolean;
    end: Schema.Types.ObjectId;
}

const clienteSchema = new mongoose.Schema({
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
        type: Schema.Types.ObjectId,
        required: true
    }


})  

export const Cliente = mongoose.model<Cliente>('Cliente', clienteSchema);