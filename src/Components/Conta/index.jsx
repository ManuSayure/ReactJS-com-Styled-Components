import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from 'styled-components';
import {Icone, Box, Detalhe, Saldo, Btn, IconeTema} from '../UI/index';

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  
  const BoxBoddy =  styled.div`
    fontSize: "26px", padding: "20px 0" 
      `;

  const IconeMargin = styled(Icone)`
  marginTop: "2px"
  `;  

  const SaldoBox = () => (
      <Saldo>
            <Detalhe >R$</Detalhe> 0,00{" "}
      </Saldo>      
    );

  return (
    <Box>
      <h2>Conta</h2>
      <BoxBoddy>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        { toggleState ? ( <SaldoBox/>) : null}
      </BoxBoddy>

      <Btn onClick={toggleHandler}>
        <IconeMargin  
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Btn>
    </Box>
  );
};

export default Conta;
