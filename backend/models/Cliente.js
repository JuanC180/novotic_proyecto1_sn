import mongoose from "mongoose";


const clienteSchema = mongoose.Schema({
    cedula: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    camara_comercio: {
        type: String,
        trim: true
    },
    nit_rut: {
        type: String,
        required: true,
        trim: true
    },
    departamento: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        trim: true
    },
    // rol_cliente: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    token: {
        type: String,
    },
    confirmado:{
        type: Boolean,
        default: false
    }
})

const Cliente = mongoose.model("Cliente", clienteSchema)
export default Cliente