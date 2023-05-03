import Cliente from "../models/Cliente.js"

const registrar = async (req, res) =>{

    // const {email, password, nombre } = req.body

    // res.json({
    //     msg: "Registrando cliente",
    //     nombre,
    //     email,
    //     password})

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

export {
    registrar
}