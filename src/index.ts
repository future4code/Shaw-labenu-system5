import app from "./app"
import criarTurma from "./endpoints/criarTurma"
import criarEstudante from "./endpoints/criarEstudante"
import getDocentes from "./endpoints/getDocentes"
import criarDocente from "./endpoints/criarDocente"
import atualizarModulo from "./endpoints/atualizarModulo";
import atualizarDocenteTurma from "./endpoints/AtualizarDocenteTurma"
import atualizarTurmaEstudante from "./endpoints/atualizarTurmaEstudante";
import getEstudantePorNome from "./endpoints/getEstudantePorNome";
import acharTurmaAtiva from "./endpoints/acheTurmaAtiva"

app.get("/estudante/:nome", getEstudantePorNome)
app.get("/turma", acharTurmaAtiva)
app.get("/docentes", getDocentes)
app.post("/docente", criarDocente)
app.post("/turma", criarTurma)
app.post("/estudante", criarEstudante)
app.put("/estudante/:id", atualizarTurmaEstudante)
app.put("/turma/:id", atualizarModulo)
app.put("/docente/:id", atualizarDocenteTurma)