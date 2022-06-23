import app from "./app"
import getByNameAll from "./endpoints/getByName"
import createTurma from "./endpoints/createTurma"
import createEstudante from "./endpoints/createEstudante"
import getDocentes from "./endpoints/getDocentes"
import createDocente from "./endpoints/createDocente"

app.get("/students/:nome", getByNameAll)
app.post("/turma", createTurma)
app.post("/estudante", createEstudante)
app.post("/docente", createDocente)
app.get("/docentes", getDocentes)