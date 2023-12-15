import React, { useState } from 'react';
import EstiloGlobal, { Container } from './styles';
import SideBar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import temaDark from './themes/dark';
import temaLight from './themes/light';
import { ThemeProvider } from 'styled-components';

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight }>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
