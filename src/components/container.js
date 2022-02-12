import React from 'react';
import { device } from '../components/device';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    @media ${device.laptop} {
        padding-top: initial;
        margin-left: 20vw;
        width: calc(100% - 20vw);
    }    
`;

const Container = ({children}) => (
  <MainContainer>
      { children }
  </MainContainer>
);

export default Container;
