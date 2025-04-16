import './index.css';
import './App.css';
import { styled } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { StyledBtn } from './Button.styled';
import desertImage from './styles/images/desert.jpeg';








function App () {
  return (
    <>
      <GlobalStyles />
      
      <Card>
        <StyledImg src={desertImage} alt="Desert" />
        <StyledTitle>Headline</StyledTitle>
        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
        <ButtonGroup>
          <StyledBtn btnType="primary">See more</StyledBtn>
          <StyledBtn btnType="secondary">Save</StyledBtn>
        </ButtonGroup>
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

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 15px;
  gap: 40px;

`






export default App;












