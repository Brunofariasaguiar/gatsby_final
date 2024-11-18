import * as React from "react";
import "../components/layout.css";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Posts da Aulas de Gatsby</h1>
      <hr />
      <h2 className="supernatural center">{children}A Estrada Até Aqui</h2>
      <hr />
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>
            {node.excerpt}
            <Link to={`/${node.frontmatter.slug}`}> Leia mais </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
