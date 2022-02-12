import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { device } from '../components/device';

import Container from '../components/container';
import Footer from '../components/footer';

function NewsPost(props) {

  const NewsImage = styled(Img)`
    width: 100%;
    z-index: -1;
    & img {
      object-position: right bottom !important;
    }  
  `;
  const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    >:first-child {
      height: 40vh;
      margin: 0;
    }
    >:not(:first-child) {
      margin: 1rem;
    }
    h1 {
      text-transform: capitalize;
    }
  `;
  const NewsText = styled.p`
    > p:first-of-type {
      margin-block-start: 0;
    }
    @media ${device.laptop} {
      font-size: 1.1em;
    }
  `;

  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  return (
    <Layout>
      <Container>
        <Flexbox>
            <NewsImage fluid={post.frontmatter.feat_image.childImageSharp.fluid} />
            <h1>{title}</h1>
            <NewsText dangerouslySetInnerHTML={{ __html: post.html }} />
        </Flexbox>

        <Footer></Footer>
      </Container>
    </Layout>
  )
}

export default NewsPost;

export const query = graphql`

query PostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      feat_image {
        childImageSharp {
          fluid (maxWidth: 1500, cropFocus: EAST, quality: 90, duotone: { highlight: "#C71C25", shadow: "#430303", opacity: 90 }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
}`