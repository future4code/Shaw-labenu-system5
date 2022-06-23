import app from "./app"
import getByNameAll from "./endpoints/getByName"
import createTurma from "./endpoints/createTurma"
import createEstudante from "./endpoints/createEstudante"
import getDocentes from "./endpoints/getDocentes"

app.get("/students/:nome", getByNameAll)
app.post("/turma", createTurma)
app.post("/estudante", createEstudante)
app.get("/docentes", getDocentes)