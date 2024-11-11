import * as React from "react";
import "../components/layout.css";
import Layout from "../components/layout";

const IndexPage = ({ children }) => {
  return (
    <Layout>
      <h1>Posts da Aulas de Gatsby</h1>
      <hr />
      <h2 className="supernatural center">{children}A Estrada Até Aqui</h2>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
