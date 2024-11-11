import React from "react";
import { graphql } from "gatsby";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const BlogPost = ({ data, children }) => {
  //const image = getImage(data.mdx.frontmatter.hero_image); <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="center">{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export default BlogPost;

/*hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }*/
