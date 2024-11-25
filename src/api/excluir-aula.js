import { excluirAula } from "../utils/crudAulas";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await excluirAula(id);
      return res.status(200).json({ message: "Aula excluída com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao excluir aula" });
    }
  }
  return res.status(405).json({ error: "Método não permitido" });
}
