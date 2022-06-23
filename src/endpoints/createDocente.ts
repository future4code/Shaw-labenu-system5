import { Request, Response } from "express";
import { DocenteModel } from "../model/DocenteModel";
import DocentesDataBase from "../data/DocenteDataBase";

export default async function Docente(req: Request, res: Response) {
    try {
        const {nome, email, data_nasc, turma_id} = req.body
        const docente = new DocenteModel(nome, email, data_nasc, turma_id)
        const docenteDB = new DocentesDataBase()
        await docenteDB.insertDocente(docente)

        res.status(201).send("Docente Adicionado")
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}