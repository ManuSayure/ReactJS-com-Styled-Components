import React, {useState} from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from './Components/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import {temaClaro, temaEscuro} from './Components/UI/temas';
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
function App() {
  const [tema, setTema] = useState(true);

  const handleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <>
    <ThemeProvider theme={tema? temaEscuro: temaClaro}>
      <GlobalStyle/>
      <BtnTema onClick={handleTema}>
        <SwitcherTema tema = {tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
      
        
    </>
  );
}

export default App;
