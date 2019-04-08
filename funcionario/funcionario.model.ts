import mongoose from 'mongoose'

export interface Funcionario extends mongoose.Document {
    nome: String;
    email: String;
    password: String;
    telefone: String;
    status: Boolean;
}

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    telefone: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
    }
})

export const Funcionario = mongoose.model<Funcionario>('Funcionario', funcionarioSchema)