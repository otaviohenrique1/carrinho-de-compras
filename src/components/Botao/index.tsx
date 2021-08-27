import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label_button: string;
}

const BotaoEstilizado = styled.button`
  width: 92%;
  background-color: royalblue;
  color: white;
  padding: 15px 0;
  margin: 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export function Botao(props: BotaoProps) {
  return (
    <BotaoEstilizado
      {...props}
    >
      {props.label_button}
    </BotaoEstilizado>
  );
}

export function ContainerBotoes(props: BotaoProps) {
  return (
    <ContainerBotoesEstilizado>
      <Botao
        {...props}
        label_button={props.label_button}
      />
    </ContainerBotoesEstilizado>
  );
}

const ContainerBotoesEstilizado = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
`;

const BotaoLinkEstilizado = styled(Link)`
  text-decoration: none;
  width: 100%;

  button {
    width: 100%;
    background-color: royalblue;
    color: white;
    padding: 15px;
    font-size: 25px;
    border-radius: 10px;
  }
`;

interface BotaoLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: any;
  label_button: string;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <BotaoLinkEstilizado to={props.to}>
      <button {...props} className="botao">{props.label_button}</button>
    </BotaoLinkEstilizado>
  );
}