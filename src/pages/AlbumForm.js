import React, { useState } from "react";

const AlbumForm = ({ onAddAlbum }) => {
  const [album, setAlbum] = useState({ title: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAlbum((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newAlbum = {
      title: album.title,
      userId: 10,
    };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums`,
        {
          method: "POST",
          body: JSON.stringify(newAlbum),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        const addedAlbum = await response.json();
        onAddAlbum(addedAlbum); // Passa o novo álbum para o componente pai
        setAlbum({ title: "" });
      } else {
        alert("Erro ao adicionar o álbum.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o álbum.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Novo Álbum</h2>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título do álbum"
            value={album.title}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AlbumForm;

export const Head = () => <title>Adicionar Novo Álbum</title>;
