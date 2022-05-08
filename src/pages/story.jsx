import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { device } from "../components/device";

import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";

const HeadlineText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 80vh;
  z-index: 22;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  > h1 {
    font-size: 2.5em;
  }
  > p {
    padding-left: 20vw;
    padding-right: 20vw;
  }
`;
const HeadlineImages = styled.div`
  display: flex;
  height: 70vh;
  mask-image: linear-gradient(to top, black 0%, black 65%, transparent 100%);
  z-index: -1;
  > div {
    margin: -2px;
  }
  > div img {
    object-position: center top !important;
  }
  > * {
    flex: 1;
  }
  > *:last-of-type {
    transform: rotateY(180deg);
  }
  @media ${device.laptop} {
    mask-image: initial;
  }
`;
const RivalryTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 1rem;
`;
const GabandRebecca = styled.div`
  display: flex;
  justify-content: space-around;
  h2 {
    font-size: 2em;
  }
  .Gab,
  .Reb {
    display: flex;
    flex-wrap: wrap;
  }
  .Gab > h2 {
    order: -1;
    writing-mode: vertical-lr;
    text-align: center;
  }
  .Reb > h2 {
    writing-mode: vertical-rl;
    text-align: center;
  }
  div > :first-child {
    min-width: 32vw;
    height: 35vh;
  }
  div > p {
    display: none;
  }
  div > .GabImage {
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
  div > .RebImage {
    clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
  }
  @media only screen and ${device.tablet} {
    .Gab,
    .Reb {
      justify-content: center;
      text-align: center;
    }
    div > p {
      display: block;
      width: 75%;
    }
  }
  @media ${device.laptop} {
    div > :first-child {
      height: 400px;
    }
  }
`;
const DistrictTitle = styled.div`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 1rem 0 0 1rem;
  h2 {
    font-size: 1.1em;
  }
`;
const DistrictGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  @supports -webkit-overflow-scrolling {
    -webkit-overflow-scrolling: touch;
  }
  > div {
    flex: 0 0 auto;
    transition: all 0.5s ease;
    margin: 0 1.5rem 1.5rem 0;
  }
  > div:first-of-type {
    padding-left: 1rem;
  }
  > div:last-of-type {
    padding-right: 1rem;
  }
  > div:hover {
    transform: scale(1.02);
  }
  > div div {
    height: 150px;
    width: 250px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  }
  > div > span {
    position: relative;
    top: 90px;
    z-index: 99;
    text-align: center;
    width: calc(100% - 1em);
    display: inline-block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    color: #ffe8e8;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  @media ${device.laptop} {
    display: grid;
    grid: 10em 10em / auto-flow 30%;
    overflow-x: initial;
    justify-content: center;
    align-items: center;
    > div div {
      width: 90%;
    }
    > div:first-of-type {
      padding-left: initial;
    }
    > div:last-of-type {
      padding-right: initial;
    }
    > div {
      margin: 0;
    }
    > div > span {
      margin-left: 1em;
      top: 2em;
      font-size: 1.1em;
      width: initial;
    }
  }
`;

const StoryPage = ({ data }) => (
  <Layout>
    <Container>
      <div>
        <HeadlineText>
          <h1>{data.pageDataStoryToml.headline}</h1>
          <p>{data.pageDataStoryToml.firstSection.paragraph}</p>
        </HeadlineText>
        <HeadlineImages>
          <GatsbyImage image={data.faithFace.childImageSharp.gatsbyImageData} />
          <GatsbyImage
            image={data.faithFaceFlip.childImageSharp.gatsbyImageData}
          />
        </HeadlineImages>
      </div>
      <RivalryTitle>Rivalry</RivalryTitle>
      <GabandRebecca>
        <div className="Gab">
          <GatsbyImage
            className="GabImage"
            image={data.gabriel.childImageSharp.gatsbyImageData}
          />
          <h2>{data.pageDataStoryToml.firstMainChar.name}</h2>
          <p>{data.pageDataStoryToml.firstMainChar.bio}</p>
        </div>
        <div className="Reb">
          <GatsbyImage
            className="RebImage"
            image={data.rebecca.childImageSharp.gatsbyImageData}
          />
          <h2>{data.pageDataStoryToml.secondMainChar.name}</h2>
          <p>{data.pageDataStoryToml.secondMainChar.bio}</p>
        </div>
      </GabandRebecca>
      <DistrictTitle>
        <h1>{data.pageDataStoryToml.districts.header}</h1>
        <h2>{data.pageDataStoryToml.districts.subHeader}</h2>
      </DistrictTitle>
      <DistrictGrid>
        <div>
          <span>{data.pageDataStoryToml.districts.name[0]}</span>
          <GatsbyImage image={data.anchor.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <span>{data.pageDataStoryToml.districts.name[1]}</span>
          <GatsbyImage image={data.downtown.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <span>{data.pageDataStoryToml.districts.name[2]}</span>
          <GatsbyImage image={data.theView.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <span>{data.pageDataStoryToml.districts.name[3]}</span>
          <GatsbyImage image={data.devZone.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <span>{data.pageDataStoryToml.districts.name[4]}</span>
          <GatsbyImage image={data.theShard.childImageSharp.gatsbyImageData} />
        </div>
        <div>
          <span>{data.pageDataStoryToml.districts.name[5]}</span>
          <GatsbyImage image={data.omniStat.childImageSharp.gatsbyImageData} />
        </div>
      </DistrictGrid>

      <Footer></Footer>
    </Container>
  </Layout>
);

export default StoryPage;

export const gridSquare = graphql`
  fragment gridSquare on File {
    childImageSharp {
      gatsbyImageData(
        width: 400
        height: 400
        transformOptions: {
          duotone: { shadow: "#430303", highlight: "#C71C25", opacity: 90 }
          cropFocus: CENTER
        }
      )
    }
  }
`;

export const query = graphql`
  query {
    pageDataStoryToml {
      headline
      firstSection {
        paragraph
      }
      characters {
        name
      }
      firstMainChar {
        name
        bio
      }
      secondMainChar {
        name
        bio
      }
      districts {
        header
        subHeader
        name
      }
    }
    faithFace: file(relativePath: { regex: "/faith-crouch-face/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          transformOptions: {
            cropFocus: NORTH
            duotone: { shadow: "#5c0c12", highlight: "#C71C25", opacity: 95 }
          }
        )
      }
    }
    faithFaceFlip: file(relativePath: { regex: "/faith-crouch-face/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          transformOptions: {
            cropFocus: NORTH
            duotone: { shadow: "#5c0c12", highlight: "#C71C25", opacity: 95 }
          }
        )
      }
    }
    gabriel: file(relativePath: { regex: "/gabriel-kruger/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          transformOptions: {
            duotone: { highlight: "#f00e2e", shadow: "#192550" }
          }
        )
      }
    }
    rebecca: file(relativePath: { regex: "/rebecca-square/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          transformOptions: {
            duotone: { highlight: "#0ec4f1", shadow: "#192550" }
          }
        )
      }
    }
    devZone: file(relativePath: { regex: "/development-zone/" }) {
      ...gridSquare
    }
    omniStat: file(relativePath: { regex: "/hideout/" }) {
      ...gridSquare
    }
    theView: file(relativePath: { regex: "/the-view/" }) {
      ...gridSquare
    }
    anchor: file(relativePath: { regex: "/anchor/" }) {
      ...gridSquare
    }
    theShard: file(relativePath: { regex: "/the-shard/" }) {
      ...gridSquare
    }
    downtown: file(relativePath: { regex: "/downtown/" }) {
      ...gridSquare
    }
  }
`;
