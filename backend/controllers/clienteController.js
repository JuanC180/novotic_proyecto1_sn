import Cliente from "../models/Cliente.js"

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
        usuarioConfirmar.confirmar = true
        await usuarioConfirmar.save()

        res.json({msg: "Usuario confirmado correctamente"})
    } catch (error) {
        console.log(error)
    }

    
}

export {
    registrar,
    confirmar
}