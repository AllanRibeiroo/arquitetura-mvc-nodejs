// CRUD
/**
 * C = Create - POST - INSERT INTO
 * R = Read (Ler) - GET - SELECT
 * U = Update - PUT - UPDATE
 * D = Delete  - DELETE - DELETE FROM
 */


/**
 * Tabela: cursos
 * Colunas: id, nome, duracao, descricao
 * Exemplo de dados:
 * | id | nome                     | duracao | descricao
 * | 1  | Tecnico Informática      | 1200    | Não é basico, pura programação
 * | 2  | Tecnico Enfermagem       | 1600    | Curso focado na área da Saúde
 */
function listarCursos(){
    const cursos = [
        { id: 1, nome: "Técnico em Informática", duracao: 1200, descricao: "Não é basico, pura programacao" },
        { id: 2, nome: "Tecnico em Enfermagem", duracao: 1600, descricao: "Curso focado na área da saude" },
        { id: 3, nome: "Técnico em Seguranca do trabalho", duracao: 1800, descricao: "Focado na sua Segurança" }
    ]
    return cursos
}


module.exports = {
    listarCursos
}