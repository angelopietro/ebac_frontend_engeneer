
import React from "react";

import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from "./styles";
import Avatar from "../../components/Avatar";


type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Ângelo Pietro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>Pietro</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Front-end Developer</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar;
