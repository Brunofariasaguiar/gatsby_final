import React, { createContext, useState, useContext } from "react";

// Contexto para gerenciar os álbuns
const AlbumsContext = createContext();

export const AlbumsProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);

  const addAlbum = (newAlbum) => {
    setAlbums((prevAlbums) => [newAlbum, ...prevAlbums]);
  };

  return (
    <AlbumsContext.Provider value={{ albums, addAlbum }}>
      {children}
    </AlbumsContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAlbums = () => useContext(AlbumsContext);
