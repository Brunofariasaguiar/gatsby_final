const {
  listarAulas,
  adicionarAula,
  editarAula,
  excluirAula,
} = require("./src/utils/crudAulas");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Exemplo de como listar todas as aulas
  const aulas = await listarAulas();
  console.log(aulas); // Exibe as aulas no console para verificar

  // Exemplo de como adicionar uma aula
  const novaAula = {
    id: 3,
    titulo: "Nova Aula",
    descricao: "Descrição da Nova Aula",
    responsavel: "Responsável 3",
    link: "https://novo-exemplo.com",
  };
  await adicionarAula(novaAula);

  // Exemplo de como editar uma aula
  const aulaEditada = {
    titulo: "Aula Editada",
    descricao: "Descrição da Aula Editada",
    responsavel: "Responsável Editado",
    link: "https://exemplo-editado.com",
  };
  await editarAula(2, aulaEditada);

  // Exemplo de como excluir uma aula
  await excluirAula(3);
};
