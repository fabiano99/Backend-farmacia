import mongoose, { Schema } from 'mongoose';

export interface Cliente extends mongoose.Document {
    _id: Object;
    nome: String;
    cpf: String;
    telefone: String;
    sexo: Boolean;
    dataNascimento: Date;
    status: String;
    end: Schema.Types.ObjectId;
    password: String;
    email: String;
}

const clienteSchema = new mongoose.Schema({
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
        type: Schema.Types.ObjectId,
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

})

export const Cliente = mongoose.model<Cliente>('Cliente', clienteSchema);