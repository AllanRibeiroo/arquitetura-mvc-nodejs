function listarAlunos(){
    const alunos = [
        { id: 1, nome: " Alek", idade: 22, curso: "Tecnico em Informatica" },
        { id: 2, nome: " Wellington ", idade: 20, curso: "Tecnico em Informatica" },
        { id: 3, nome: " Isaque ", idade: 20, curso: "Tecnico em Informatica" }
    ]
    return alunos
}


module.exports = {
    listarAlunos
}