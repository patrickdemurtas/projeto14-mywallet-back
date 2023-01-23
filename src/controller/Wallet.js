import db from "../config/database.js"


export async function getBalance (req,res) {
    try {
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");
        const sessao = await db.collection("sessoes").findOne({token});
        if(!sessao){
            return res.status(401).send("Você não tem autorização");
        }
        const adds = await db.collection("balance").find({idUsuario: sessao.idUsuario}).toArray();
        const user = await db.collection("usuarios").findOne({_id: sessao.idUsuario});
        delete user.password;
        delete user.email;
        const response = {...user, adds};
        res.status(200).send(response);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

}

export async function inOut(req,res) {

    try {
		const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");
        const sessao = await db.collection("sessoes").findOne({token});
        if(!sessao){
            return res.status(401).send("Você não tem autorização");
        }

        const add = req.body
        add.idUsuario = sessao.idUsuario;
        await db.collection("balance").insertOne(add)
        res.status(201).send("sucesso")}
        catch (e){
            res.sendStatus(500)
        }

    }