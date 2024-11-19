const fs = require("fs-extra");
const path = "../../blog/aulas.mdx";
const matter = require("gray-matter");

// Função para ler as aulas do arquivo MDX
async function listarAulas() {
  try {
    const content = await fs.readFile(path, "utf-8");
    const aulas = [];
    const regex = /---\s*\n([^]+?)\s*---\n([^]+?)(?=\n---|\z)/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
      const frontmatter = matter(`---\n${match[1]}---`).data;
      const body = match[2];
      aulas.push({ ...frontmatter, corpo: body });
    }
    return aulas;
  } catch (err) {
    console.error("Erro ao listar aulas", err);
    return [];
  }
}

// Função para adicionar uma nova aula no arquivo MDX
async function adicionarAula(aula) {
  try {
    const content = await fs.readFile(path, "utf-8");
    const frontmatter = `id: ${aula.id}\ntitulo: "${aula.titulo}"\ndescricao: "${aula.descricao}"\nresponsavel: "${aula.responsavel}"\nlink: "${aula.link}"`;
    const corpo = `## ${aula.titulo}\n\n${aula.descricao}\n\n[Link de apoio](${aula.link})`;

    const newAula = `\n---\n${frontmatter}\n---\n${corpo}\n---`;
    await fs.appendFile(path, newAula); // Adiciona a nova aula no final do arquivo
  } catch (err) {
    console.error("Erro ao adicionar aula", err);
  }
}

// Função para editar uma aula existente
async function editarAula(id, novaAula) {
  try {
    const content = await fs.readFile(path, "utf-8");
    const regex = /---\s*\n([^]+?)\s*---\n([^]+?)(?=\n---|\z)/g;

    let match;
    let newContent = content;

    while ((match = regex.exec(content)) !== null) {
      const frontmatter = matter(`---\n${match[1]}---`).data;
      const body = match[2];

      if (frontmatter.id === id) {
        const updatedFrontmatter = `id: ${id}\ntitulo: "${novaAula.titulo}"\ndescricao: "${novaAula.descricao}"\nresponsavel: "${novaAula.responsavel}"\nlink: "${novaAula.link}"`;
        const updatedCorpo = `## ${novaAula.titulo}\n\n${novaAula.descricao}\n\n[Link de apoio](${novaAula.link})`;

        newContent = newContent.replace(
          match[0],
          `---\n${updatedFrontmatter}\n---\n${updatedCorpo}\n---`
        );
        break; // Encontrou a aula, pode sair do loop
      }
    }

    await fs.writeFile(path, newContent); // Grava o conteúdo atualizado no arquivo
  } catch (err) {
    console.error("Erro ao editar aula", err);
  }
}

// Função para excluir uma aula
async function excluirAula(id) {
  try {
    const content = await fs.readFile(path, "utf-8");
    const regex = /---\s*\n([^]+?)\s*---\n([^]+?)(?=\n---|\z)/g;

    let match;
    let newContent = content;

    while ((match = regex.exec(content)) !== null) {
      const frontmatter = matter(`---\n${match[1]}---`).data;

      if (frontmatter.id === id) {
        newContent = newContent.replace(match[0], ""); // Remove a aula encontrada
        break; // Aula removida, sai do loop
      }
    }

    await fs.writeFile(path, newContent); // Grava o conteúdo atualizado no arquivo
  } catch (err) {
    console.error("Erro ao excluir aula", err);
  }
}

module.exports = {
  listarAulas,
  adicionarAula,
  editarAula,
  excluirAula,
};
