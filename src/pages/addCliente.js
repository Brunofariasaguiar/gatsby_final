import React, { useState } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const AddCliente = () => {
  const [cliente, setCliente] = useState({
    Name: "",
    Ativo: "",
    cidade: "",
    estado: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!cliente.Name) newErrors.Name = "O campo Nome é obrigatório.";
    if (cliente.Ativo === "") newErrors.Ativo = "O campo Ativo é obrigatório.";
    if (!cliente.cidade) newErrors.cidade = "O campo Cidade é obrigatório.";
    if (!cliente.estado) newErrors.estado = "O campo Estado é obrigatório.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const newCliente = {
      Name: cliente.Name,
      Ativo: cliente.Ativo === "true",
      cidade: cliente.cidade,
      estado: cliente.estado,
    };

    try {
      const response = await fetch(
        `https://6744b77fb4e2e04abea35d69.mockapi.io/api/v1/cadClinet`,
        {
          method: "POST",
          body: JSON.stringify(newCliente),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        setCliente({
          Name: "",
          Ativo: "",
          cidade: "",
          estado: "",
        });
        alert("Cliente cadastrado com sucesso!");
        navigate("/listaClientes"); // Redireciona após o sucesso
      } else {
        alert("Erro ao adicionar o cliente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o cliente.");
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Novo Cliente</h2>
        <hr />
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="Name"
            value={cliente.Name}
            onChange={handleChange}
          />
          {errors.Name && <p>{errors.Name}</p>}
        </div>
        <div>
          <label>Ativo:</label>
          <select name="Ativo" value={cliente.Ativo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
          {errors.Ativo && <p>{errors.Ativo}</p>}
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={cliente.cidade}
            onChange={handleChange}
          />
          {errors.cidade && <p>{errors.cidade}</p>}
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="text"
            name="estado"
            value={cliente.estado}
            onChange={handleChange}
          />
          {errors.estado && <p>{errors.estado}</p>}
        </div>
        <button type="submit">Salvar</button>
        <div className="link-container">
          <a href="/listaClientes">Lista de Clientes</a>
        </div>
      </form>
    </Layout>
  );
};

export default AddCliente;

export const Head = () => <title>Novo Cliente</title>;
