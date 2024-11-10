import * as React from "react";
import "../components/layout.css";
import Layout from "../components/layout";

const IndexPage = ({ children }) => {
  return (
    <Layout>
      <h1>Posts da Aulas de Gatsby</h1>
      <hr />
      <h3 className="supernatural">{children}Ha Estrada Ate Aqui</h3>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
