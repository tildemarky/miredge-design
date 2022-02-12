import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { device } from "../components/device";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Container from "../components/container";

library.add(faChevronDown);

const LandingPage = styled.div`
  height: 70vh;
  > :first-child {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%);
    mask-image: linear-gradient(black 0%, transparent 100%);
  }
  > h1 {
    z-index: 22;
    position: absolute;
    top: 45vh;
    text-align: center;
    font-size: 3em;
    width: 100vw;
    font-weight: 900;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
  > h1 > span {
    display: table;
    color: #c71c25;
    margin: auto;
    text-shadow: 0 2px 3px rgba(92, 12, 18, 0.2);
  }
  @media ${device.laptop} {
    height: 90vh;
    > :first-child {
      transform: rotate(360deg) scaleX(-1);
    }
    > h1 {
      font-size: 6em;
      top: 20vh;
      width: 300px;
      text-align: center;
      margin-left: 7rem;
    }
    > h1 > span {
      display: block;
      margin: initial;
      font-size: 1.35em;
      transition: all 0.3s ease-in-out 0s;
    }
    > h1 > span:hover {
      transform: translateX(-5px);
    }
  }
`;
const ArrowDown = styled(FontAwesomeIcon)`
  padding: 0 0 1.5rem 0;
  display: flex;
  margin: auto;
  font-size: 40px;
  color: #c71c25;
  @media ${device.laptop} {
    font-size: 55px;
  }
`;
const PostLandingPageContent = styled.div`
  padding: 1rem 0 3rem 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  @supports (padding-left: env(safe-area-inset-left)) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  > .GatsbyImage,
  > .GatsbyImageFlip {
    width: 55vw;
    // Get to use the same clippath for both because flip automatically flips them!
    // Making them go in opposite directions.
    clip-path: polygon(0 8%, 100% 0, 100% 92%, 0% 100%);
  }
  > .GatsbyImageFlip {
    transform: scaleX(-1);
  }
  // Second image alignment
  > :nth-child(3) {
    justify-self: end;
    grid-column: 2 / span 2;
    grid-row: 2;
  }
  > div > p {
    display: none;
  }
  > .FirstBanner {
    font-size: 0.8em;
    grid-column: 2 / span 2;
    z-index: 22;
    text-align: center;
    background-color: white;
    padding: 1.5rem;
    margin-right: 1rem;
    border-radius: 15px 0 15px 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  }
  > .SecondBanner {
    font-size: 0.7em;
    grid-column: 1 / span 2;
    grid-row: 2;
    z-index: 22;
    text-align: center;
    background-color: white;
    padding: 1.5rem;
    margin-left: 1rem;
    border-radius: 15px 0 15px 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  }
  > .FirstBanner > h2 > :first-child,
  > .SecondBanner > h2 > :first-child {
    display: inline-block;
    text-transform: uppercase;
  }
  @media ${device.phablet} {
    > .FirstBanner,
    > .SecondBanner {
      font-size: 1em;
    }
  }
  @media ${device.laptop} {
    grid-row-gap: 5em;
    > .GatsbyImage {
      grid-column: 1 / span 2;
      grid-row: 1;
      border-radius: 90px 0 90px 0;
    }
    > .GatsbyImageFlip {
      grid-column: 2 / span 2;
      grid-row: 2;
      border-radius: 0 90px 0 90px;
    }
    > .GatsbyImage,
    > .GatsbyImageFlip {
      width: 69%;
      clip-path: initial;
      justify-self: center;
    }
    > .FirstBanner {
      grid-row: 1;
    }
    > .SecondBanner {
      grid-row: 2;
    }
    > .FirstBanner,
    > .SecondBanner {
      font-size: 1.5em;
      width: 50%;
      justify-self: center;
      padding-top: 2em;
      padding-bottom: 2em;
      border-radius: initial;
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <LandingPage>
        <Img fluid={data.faithRun.childImageSharp.fluid} />
        <h1>
          IT&apos;S TIME TO <span>RUN</span>
        </h1>
      </LandingPage>
      <ArrowDown icon={faChevronDown} />
      <PostLandingPageContent>
        <Img
          className="GatsbyImage"
          fluid={data.blackNovFighter.childImageSharp.fluid}
        />
        <div className="FirstBanner">
          <h2>
            We run for <Link to="/story">freedom</Link>
          </h2>
          <p>
            The Runners are a special group of voluntary offGrids who’ve decided
            not to be part of the Conglomerate machine. Living on the rooftops
            and grouping together in tight-knit Cabals they race across the
            urban landscapes, performing burglaries and courier jobs for those
            willing to pay. The Corporate Houses secretly depend on the Runners
            for their constant scheming and though KrugerSec has a standing
            order to neutralize any Runner on sight, some claim that they are
            not clamping down as hard on them as they could.
          </p>
        </div>
        <Img
          className="GatsbyImageFlip"
          fluid={data.armedForces.childImageSharp.fluid}
        />
        <div className="SecondBanner">
          <h2>
            The <Link to="/story">conglomerate</Link> reign ends
          </h2>
          <p>
            The city of Glass is ruled by the Conglomerate, which in turn is
            comprised of several powerful corporations, but it’s not the only
            faction in town. Other groups exist - those working against the
            oppression, those supporting it, and those in between.
          </p>
        </div>
      </PostLandingPageContent>

      <Footer></Footer>
    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    faithRun: file(relativePath: { regex: "/faith-run/" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    armedForces: file(relativePath: { regex: "/armed-forces/" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    blackNovFighter: file(relativePath: { regex: "/black-nov-fighter/" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
