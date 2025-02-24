import styled, {css} from 'styled-components';



 type StyledBtnPropsType = {
   btnType: "primary" | "secondary";
   primary?: boolean;
 }


export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 100px;
  height: 40px;
  top: 298px;
  left: 20px;
  border-radius: 5px;
  font-size: 14px;
  color: #3253e9;
  background-color: #f0eaea;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: ${props => (props.primary ? "#1310e6" : "#0561eb")};
    color: ${props => (props.primary ? "#ffffff" : "#ffffff")};
    
  };
`
