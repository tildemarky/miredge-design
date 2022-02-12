import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { device } from '../components/device';

library.add(faXbox, faPlaystation, faDesktop);

const Footer = styled.div`
  font-size: 12px;
  color: gray;
  bottom: 0;
  padding-top: 1rem;
  padding-bottom: 5rem;
  position: relative;
  width: 69%;
  margin: auto;
  > h4 {
    margin: 1rem;
    text-align: center;
  }
  > p > a {
    font-weight: bold;
    font-style: normal;
  }
  > p {
    text-align: center;
  }
  @media ${device.laptop} {
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-size: 14px;
    > h4 {
      margin: auto;
      text-align: initial; 
      width: 50%;
    }
  }
`;
const AvailableList = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 1rem;
  > * {
    padding: 0 1rem 0.5rem 1rem;
  }
  > div >:last-child {
    font-size: 3em;
  }
  @media ${device.laptop} {
    > div > :last-child {
      font-size: 4em;
    }
  }
`;
const Footprint = styled.p`
  font-size: 14px;
`;
const LegalNoticeButton = styled.div`
  width: 100%;
  color: #C71C25;
  text-align: center;
  font-size: 15px;
  > h4 {
    font-size: 13px;
  }
  > span {
    display: ${props => props.active ? 'block' : 'none'};
    color: gray;
    font-size: 12px;
    background-color: white;
    font-family: 'Roboto Condensed', -apple-system, system-ui BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-weight: 400;
    padding: 1rem;
  }
  @media ${device.laptop} {
    > span {
      font-size: 14px;
    }
  }
`;

class MainFooter extends Component {

  state = {
    isActive: false
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState(state => ({ isActive : !state.isActive }));
  };

  render() {
    return(
      <Footer>
        <h4>Available On:</h4>
        <AvailableList>
          <div>
            <p>Xbox One</p>
            <FontAwesomeIcon icon={faXbox}></FontAwesomeIcon>
          </div> 
          <div>
            <p>Playstation 4</p>
            <FontAwesomeIcon icon={faPlaystation}></FontAwesomeIcon>
          </div>
          <div>
            <p>Origin (PC)</p>
            <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
          </div>
        </AvailableList>
        <Footprint>Website Design by Marky Rego</Footprint>
        <LegalNoticeButton 
          onClick={this.handleClick} active={this.state.isActive}> 
          <h4>Copyright Notice</h4>
          <span>Trademarks are the property of their respective owners. Game materials copyright Electronic Arts Inc. Electronic Arts has not endorsed and is not responsible for this site or its content. Microsoft, Xbox One, and the Xbox logos are trademarks of the Microsoft group of companies. "PlayStation" and the "PS" Family logo are registered trademarks of Sony Computer Entertainment Inc.</span>
          </LegalNoticeButton>
        <p>Zero user or payment information is handled on this site.</p>
      </Footer>
    )
  }
}

export default MainFooter;
