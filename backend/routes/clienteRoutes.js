import express from "express";
const router = express.Router();
import { 
    registrar, 
    confirmar,
    autenticar
} from "../controllers/clienteController.js";


router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);

// router.get("/login", (req, res) =>{
//     res.json("DEsde api/cliente/login")
// });

export default router;

