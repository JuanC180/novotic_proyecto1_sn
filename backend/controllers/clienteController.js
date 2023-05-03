import Cliente from "../models/Cliente.js"
import generarJWT from "../helpers/generarJWT.js";

const registrar = async (req, res) =>{

    const {email} = req.body

    // prevenir usuarios duplicados
    const existeUsuario = await Cliente.findOne({email})

    if(existeUsuario){
        const error = new Error("Usuario ya registrado..")
        return res.status(400).json({msg: error.message})
    }

    try {
        // guradar nuevo cliente
        const cliente = new Cliente(req.body);
        const clienteGuardado = await cliente.save();
        res.json(clienteGuardado)
        // res.json({msg: "Registrano cliente...."})

    } catch (error) {
        console.log(error)
    }
}

const confirmar = async (req, res) =>{
    const {token} = req.params
    const usuarioConfirmar = await Cliente.findOne({token})
    
    if(!usuarioConfirmar){
        const error = new Error("Token no válido")
        return res.status(404).json({msg:error.message})
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()

        res.json({msg: "Usuario confirmado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async (req, res) =>{
   const {email, password} = req.body

   const usuario = await Cliente.findOne({email})

   if(!usuario){
    const error = new Error("El Usuario no existe");
    return res.status(404).json({msg: error.message});
   }

   // comprobar si un usaurio esta comprobado
   if(!usuario.confirmado){
    const error = new Error("tu cuenta no ha sido confirmada");
    return res.status(403).json({msg: error.message});
   }

   // revisar el password
   if( await usuario.comprobarPassword(password)){
    // autenticar
    res.json({token: generarJWT(usuario.id)})
    console.log("passorwor correcto")
   }
   else{
    const error = new Error("El password es incorrecto");
    return res.status(403).json({msg: error.message});
   }
}

export {
    registrar,
    confirmar,
    autenticar
}