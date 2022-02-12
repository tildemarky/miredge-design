import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import svglogo from '../images/logo.img.svg';
import { device } from '../components/device';

const Grid = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 99;
  height: 20vh;
  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.85);
  };
  background-color: rgba(255, 255, 255, 1);
  >:first-child {
    width: 200px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    > :first-child {
      padding: 1rem;
      flex-grow: 1;
    }
    > :first-child > * {
      width: 200px;
    }
  }
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: initial;
    left: 0;
    top: 0;
    width: 20vw;
    height: 100vh;
    > :first-child {
      flex-grow: initial;
    }
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  > a {
    padding-top: 1em;
    font-family: 'Roboto Condensed', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
  }
  @media ${device.tablet} {
    width: initial;
    > a {
      margin: 1rem;
      padding-top: initial;
    }
  }
  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    > a {
      font-size: 1.5em;
      transition: all 0.4s ease-in-out 0s;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin: 0;
    }
    > a:hover {
      color: #f9eaeb;
      background: #C71C25;
    }
  }
`;
const BuyNowLaptopLink = styled.a`
  display: none;
  @media ${device.laptop} {
    display: initial;
    margin-top: auto;
    margin-bottom: 2rem;
    padding: 1rem 0 1rem 0;
    background-color: #C71C25;
    color: #f9eaeb;
    width: 60%;
    text-transform: uppercase;
    text-align: center;
    border-radius: 15px 0 15px 0;
    border: 4px solid #C71C25;
    font-size: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 9px;
    transition: all 0.3s ease-in-out 0s;
    &:hover {
      color: #C71C25;
      background-color: #f9eaeb;
      border: 4px solid #C71C25;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 20px;
      transform: translateY(-2px);
    }
  }
`;
const BuyNowButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: white;
  color: #C71C25;
  z-index: 98;
  text-transform: uppercase;
  transition: ease 0.75s;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 15px 0;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
  &:hover {
    transform: scale(.97);
    box-shadow: 0 4px 6px rgba(0,0,0,0.11);
  }
  > a {
    color: white;
    background-color: #C71C25;
    border: 4px solid rgba(0, 0, 0, 0);
    transition: 0.5s ease;
    padding: 0.5rem;
    border-radius: 15px 0 15px 0;
  }
  > a:hover {
    color: #C71C25;
    background-color: white;
    border: 4px solid #C71C25;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const MainHeader = () => (
  <Grid>
    <Link to="/"><img src={svglogo} alt="Mirror's Edge Catalyst Redesign Logo"></img></Link>
    <Navigation>      
      <Link to="/overview">Overview</Link>
      <Link to="/story">Story</Link>
      <Link to="/news">News</Link>
    </Navigation>
    <BuyNowLaptopLink href="https://www.origin.com/store/mirrors-edge/mirrors-edge-catalyst">Buy Now</BuyNowLaptopLink>
    <BuyNowButton>
      <a href="https://www.origin.com/store/mirrors-edge/mirrors-edge-catalyst">
        <div>Buy Now</div>
      </a>
    </BuyNowButton>
  </Grid>
);

export default MainHeader;
