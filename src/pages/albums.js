import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import {
  FaBookOpen,
  FaArrowLeft,
  FaArrowRight,
  FaEllipsisH,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import AlbumForm from "./AlbumForm";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => alert(error.message));
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(albums.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = albums.slice(startIndex, endIndex);

  const handlePageChange = ({ selected: page }) => setCurrentPage(page);

  const addAlbumToList = (newAlbum) => {
    setAlbums((prevAlbums) => [newAlbum, ...prevAlbums]);
  };

  return (
    <Layout>
      <h1 className="supernatural center">Albums</h1>
      <AlbumForm onAddAlbum={addAlbumToList} />
      <hr />
      <div className="albums">
        {currentItems.map((album) => (
          <div key={album.id} className="album">
            <FaBookOpen className="i" size={48} color="#333" />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="pagination-container">
        <ReactPaginate
          activeClassName="item_active"
          breakLabel={<FaEllipsisH size={18} />}
          breakClassName="pagination_break"
          containerClassName="pagination"
          nextClassName="pagination_next"
          previousClassName="pagination_previous"
          pageClassName="pagination_page"
          disabledClassName="disabled"
          nextLabel={<FaArrowRight size={20} />}
          previousLabel={<FaArrowLeft size={20} />}
          onPageChange={handlePageChange}
          pageCount={totalPages}
          renderOnZeroPageCount={null}
        />
      </div>
    </Layout>
  );
};

export default Albums;

export const Head = () => <title>Albums</title>;
