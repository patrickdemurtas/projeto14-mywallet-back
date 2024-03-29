import express from "express";
import cors from "cors";
import authRouter from "./routes/AuthRoutes.js";
import walletRouter from "./routes/WalletRoutes.js";


const server = express();

server.use(express.json());
server.use(cors());

server.use([authRouter, walletRouter])

const PORT = 5010

server.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})