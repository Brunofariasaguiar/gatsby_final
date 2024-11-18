import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

const AulasPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
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
      <h1>Aulas</h1>
    </Layout>
  );
};

export const Head = () => <title>Posts</title>;

export default AulasPage;
