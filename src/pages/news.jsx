import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { device } from "../components/device";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";

library.add(faLongArrowAltRight);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  &:last-of-type {
    order: -1;
  }
  > a:nth-of-type(2) {
    order: -1;
    // text-align: justify;
    letter-spacing: 0.08em;
    text-transform: capitalize;
    padding: 0.5em 0 0.5em 0;
  }
  @media ${device.tablet} {
    > a:nth-of-type(2) {
      order: initial;
    }
  }
`;
const NewsCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const DateLink = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NewsDate = styled.time`
  font-size: 0.85em;
  color: darkslategray;
`;
const LinkArrow = styled(FontAwesomeIcon)`
  color: red;
`;
const NewsPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Grid>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <NewsCard key={node.id}>
              <a href={node.fields.slug}>
                <GatsbyImage
                  image={
                    node.frontmatter.feat_image.childImageSharp.gatsbyImageData
                  }
                />
              </a>
              <a href={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
              </a>
              <NewsCardBody>
                <p>{node.frontmatter.excerpt}</p>
                <DateLink>
                  <NewsDate dateTime={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </NewsDate>
                  <a href={node.fields.slug}>
                    <LinkArrow icon={faLongArrowAltRight}></LinkArrow>
                  </a>
                </DateLink>
              </NewsCardBody>
            </NewsCard>
          ))}
        </Grid>

        <Footer></Footer>
      </Container>
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query MarkdownQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            excerpt
            feat_image {
              childImageSharp {
                gatsbyImageData(
                  width: 900
                  quality: 90
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
