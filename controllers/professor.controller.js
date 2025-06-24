const professorModel = require('../models/professor.modulo');

function listar(request,response) {
    const professor = professorModel.listarProfessor();
    response.json(professor); 
}

module.exports = {
    listar
}