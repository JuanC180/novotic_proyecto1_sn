import express from "express";
const router = express.Router();
import { registrar } from "../controllers/clienteController.js";

router.post("/", registrar);

router.get("/login", (req, res) =>{
    res.send("DEsde api/cliente/login")
});

export default router;

