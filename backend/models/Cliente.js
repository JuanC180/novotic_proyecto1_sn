import mongoose from "mongoose";


const clienteSchema = mongoose.Schema({
    cedula_cliente: {
        type: String,
        required: true,
        trim: true
    },
    nombre_cliente: {
        type: String,
        required: true,
        trim: true
    },
    apellido_cliente: {
        type: String,
        required: true,
        trim: true
    },
    email_cliente: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password_cliente: {
        type: String,
        required: true,
    },
    telefono_cliente: {
        type: String,
        required: true,
        trim: true
    },
    direccion_cliente: {
        type: String,
        required: true,
        trim: true
    },
    camara_comercio_cliente: {
        type: String,
        trim: true
    },
    nit_rut_cliente: {
        type: String,
        required: true,
        trim: true
    },
    departamento_cliente: {
        type: String,
        required: true,
        trim: true
    },
    ciudad_cliente: {
        type: String,
        required: true,
        trim: true
    },
    estado_cliente: {
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