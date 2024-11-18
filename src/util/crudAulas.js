import fs from "fs";

const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../dataBase/aulas.json");

// Função para ler o JSON
const lerAulas = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Função para salvar o JSON
const salvarAulas = (aulas) => {
  fs.writeFileSync(filePath, JSON.stringify(aulas, null, 2));
};

// Função para listar as aulas
const listarAulas = () => {
  return lerAulas();
};

// Função para adicionar uma nova aula
const adicionarAula = (novaAula) => {
  const aulas = lerAulas();
  novaAula.id = aulas.length + 1;
  aulas.push(novaAula);
  salvarAulas(aulas);
};

// Função para editar uma aula
const editarAula = (id, aulaAtualizada) => {
  const aulas = lerAulas();
  const index = aulas.findIndex((aula) => aula.id === id);
  if (index !== -1) {
    aulas[index] = { ...aulas[index], ...aulaAtualizada };
    salvarAulas(aulas);
  }
};

// Função para excluir uma aula
const excluirAula = (id) => {
  const aulas = lerAulas();
  const aulasFiltradas = aulas.filter((aula) => aula.id !== id);
  salvarAulas(aulasFiltradas);
};

module.exports = {
  listarAulas,
  adicionarAula,
  editarAula,
  excluirAula,
};
