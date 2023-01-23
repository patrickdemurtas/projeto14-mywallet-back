import { Router } from "express";
import { inOut, getBalance } from "../controller/Wallet.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { walletSchema } from "../schema/WalletSchema.js"



const walletRouter = Router()


walletRouter.get("/balance", getBalance);
walletRouter.post("/balance", validateSchema(walletSchema), inOut);

export default walletRouter

