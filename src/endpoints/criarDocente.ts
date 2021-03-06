import { Request, Response } from "express";
import { DocenteModel } from "../model/DocenteModel";
import DocentesDataBase from "../data/DocenteDataBase";

export default async function criarDocente(req: Request, res: Response) {
    try {
        const {nome, email, data_nasc, turma_id} = req.body

        if(!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Favor preencher corretamente os campos");
        }
        
        const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
        const docente = new DocenteModel(nome, email, newDate, turma_id)
        const docenteDB = new DocentesDataBase()
        await docenteDB.criarDocente(docente)

        res.status(201).send("Docente Adicionado")
    } catch (error: any) {
        res.send(error.message)
    }
}