const alunoModel = require('../models/aluno.modulo');

function listar(request,response) {
    const alunos = alunoModel.listarAlunos();
    response.json(alunos); 
}

module.exports = {
    listar
}