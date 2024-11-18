export const {
  listarAulas,
  adicionarAula,
  editarAula,
  excluirAula,
} = require("./src/utils/crudAulas");

exports.onCreateDevServer = ({ app }) => {
  // Listar aulas
  app.get("/api/aulas", (req, res) => {
    const aulas = listarAulas();
    res.json(aulas);
  });

  // Adicionar uma nova aula
  app.post("/api/aulas", (req, res) => {
    const novaAula = req.body;
    adicionarAula(novaAula);
    res.status(201).json({ message: "Aula criada com sucesso!" });
  });

  // Editar uma aula existente
  app.put("/api/aulas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const aulaAtualizada = req.body;
    editarAula(id, aulaAtualizada);
    res.json({ message: "Aula atualizada com sucesso!" });
  });

  // Excluir uma aula
  app.delete("/api/aulas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    excluirAula(id);
    res.json({ message: "Aula excluída com sucesso!" });
  });
};
