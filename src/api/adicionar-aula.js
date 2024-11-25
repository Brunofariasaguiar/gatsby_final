import { adicionarAula } from "../utils/crudAulas";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const aula = req.body;
      await adicionarAula(aula);
      return res.status(200).json({ message: "Aula adicionada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao adicionar aula" });
    }
  }
  return res.status(405).json({ error: "Método não permitido" });
}
