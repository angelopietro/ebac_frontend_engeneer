import styled from "styled-components";
import { Props } from ".";

export const P = styled.p<Props>`
font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')};
color: ${(props) =>
  props.tipo === 'principal' ? props.theme.colorPrincipal : props.theme.colorSecundaria
};
line-height: 22px;
`
