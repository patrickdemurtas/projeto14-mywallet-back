import { signIn, signUp } from "../controller/Auth.js";
import { Router } from "express";
import { usuarioSchema, loginSchema } from "../schema/AuthSchema.js";
import { validateSchema } from "../middleware/validateSchema.js"


const authRouter = Router()


authRouter.post("/sign-up", validateSchema(usuarioSchema), signUp)

authRouter.post("/sign-in", validateSchema(loginSchema), signIn)

export default authRouter
