import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components';
import {corPrimaria} from '../UI/variaveis';

const StyledHeader = styled.nav `
background-color: ${corPrimaria};
display: flex;
justify-content: space-between;
padding: 0 15vw;
height: 10vh;
align-items: center;
`;
const ImageLogo = styled.img`
height: 50px;
width: 50px;
`;
const BtnHeader = styled.a`
text-align: center;
border-radius: 3px;
padding: 5px 20px;
margin: 0 10px;
font-weight: 600;
border: 2px solid white;

background: ${props => props.primary ? corPrimaria : "white"};
color: ${props => props.primary ? "white" : corPrimaria};
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <ImageLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader primary  href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
