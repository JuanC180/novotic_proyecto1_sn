import express from "express";
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("DEsde api/cliente")
});

router.get("/login", (req, res) =>{
    res.send("DEsde api/cliente/login")
});

export default router;

