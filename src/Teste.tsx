import React from 'react';
import { styled } from "styled-components";

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
}

const Botao = styled.button<BotaoProps>`
  background-color:${props => (props.principal ? '#999' : '#000')};
  color: #FFF;
  border: none;
  font-size: ${props => props.fontSize || '16px'}
`
const BotaoPerigo = styled(Botao)`
background-color: #FF0000
`
function Teste() {
  return (
    <>
      <Botao principal={false} fontSize='18px'>Cancelar</Botao>
      <Botao principal fontSize='14px'>Acessar</Botao>
      <BotaoPerigo principal>Não Clique</BotaoPerigo>
    </>
  )
}

export default Teste;
