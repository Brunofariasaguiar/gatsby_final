import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FaArrowLeft, FaArrowRight, FaEllipsisH } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchClientes = async () => {
      const data = await fetch(
        "https://6744b77fb4e2e04abea35d69.mockapi.io/api/v1/cadClinet"
      );
      const response = await data.json();
      setClientes(response);
    };

    fetchClientes();
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(clientes.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = clientes.slice(startIndex, endIndex);

  const handlePageChange = ({ selected: page }) => setCurrentPage(page);

  return (
    <Layout>
      <h1 className="supernatural center">Lista de Clientes</h1>
      <hr />
      <div>
        {currentItems.map((clinete) => (
          <div key={clinete.id}>
            <p>Nome: {clinete.Name}</p>
            <p>Ativo: {clinete.Ativo ? "Sim" : "Não"}</p>
            <p>
              Cidade: {clinete.Cidade} - {clinete.Estato}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <hr />
      <div>
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

export default ListaClientes;

export const Head = () => <title>Lista de Clientes</title>;
