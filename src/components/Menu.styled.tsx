import styled from "styled-components";


export const Menu = styled.nav `
   ul{
     list-style: none;
     padding: 0px;
     display: flex;

     li > a {
      color: #ac0b0b;
     };

     li + li{
      margin-left: 20px;
     }
   }

`