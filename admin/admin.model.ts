import mongoose from 'mongoose';

export interface Admin extends mongoose.Document {
    _id: Object;
    nome: String;
    password: String;
    email: String;
    telefone: String;
    status: String;

}

const adminSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
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
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    }

}) 

export const Admin = mongoose.model<Admin>('Admin', adminSchema);