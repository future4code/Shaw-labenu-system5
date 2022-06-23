import { TurmaDataBase } from "./data/TurmaDataBase";
import app from "./app"
import getByNameAll from "./endpoints/getByName"
import createTurma from "./endpoints/createTurma"
import createEstudante from "./endpoints/createEstudante"
import getDocentes from "./endpoints/getDocentes"
import createDocente from "./endpoints/createDocente"
import findActiveClass from "./endpoints/findActiveClass";

app.get("/students/:nome", getByNameAll)
app.get("/turma", findActiveClass)
app.post("/turma", createTurma)
app.post("/estudante", createEstudante)
app.post("/docente", createDocente)
app.get("/docentes", getDocentes)
