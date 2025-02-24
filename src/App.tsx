import React from 'react';
import './index.css';
import './App.css';
import { StyledBtn } from './components/Button.styled';
import { GlobalStyles } from './styles/GlobalStyles';
import { styled } from 'styled-components';
import images from './components/images/0cbd17e4381497547009ce81acc4eee3.jpeg';



function App() {
  return (
    <>
      <GlobalStyles />
      
      <Card>
        <StyledImg src={images} alt="Desert" />
        <StyledTitle>Headline</StyledTitle>
        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
        <BattonGroup>
          <StyledBtn btnType="primary">See more</StyledBtn>
          <StyledBtn btnType="secondary">Save</StyledBtn>
        </BattonGroup>
      </Card>
    </>
  );
}

export const Card = styled.div`
   width: 410px;
   height: 490px;
   padding: 16px;
   background: white;
   border-radius: 15px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const StyledImg = styled.img`
   width: 380px;
   height: 270px;
   top: 10px;
   left: 10px;
   border-radius: 10px;
`;

export const StyledTitle = styled.h2`
    font-size: 25px;
    margin: 16px 0;
    margin-left: 15px;
`;

export const StyledText = styled.p`
   font-size: 18px;
   color: #555;
   margin-left: 15px;
`

export const BattonGroup = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 15px;
  gap: 40px;

`






export default App;












