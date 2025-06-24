// Importando o módulo express
const express = require ('express');

const app = express(); 

// Importando os controllers
const cursoController = require ('./controllers/curso.controller')
const alunoController = require ('./controllers/aluno.controller')
const professoresController = require ('./controllers/professor.controller')


// Rota para listar cursos
app.get('/listar-cursos', cursoController.listar )
app.get('/listar-aluno', alunoController.listar)
app.get('/listar-professores', professoresController.listar)


// Definindo a porta do servidor
app.listen(3000, function(){
    console.log('Servidor ON')
})
