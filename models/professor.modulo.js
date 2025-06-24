function listarProfessor(){
    const professor = [
        { id: 1, nome: " Kaique ", idade: 27, posicao: "Professor de Programação" },
        { id: 2, nome: " Everton ", idade: 30, posicao: "Tecnico em Informatica" },
        { id: 3, nome: " Du ", idade: 33, posicao: "Tecnico em Redes" }
    ]
    return professor
}


module.exports = {
    listarProfessor
}