import styled from "styled-components";
import { BotaoLink } from "../../components/Botao";
import { Container } from "../../components/Container";
import { Separador } from "../../components/Separador";
import { Titulo } from "../../components/Titulo";

const ContainerEstilizado = styled(Container)`
  height: 100%;
`;

const Lista = styled.div`
  padding: 10px;
  background-color: white;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

export function Home() {
  return (
    <ContainerEstilizado>
      <Lista>
        <Titulo titulo="Compras" />
        <br />
        <Separador />
        <br />
        <BotaoLink
          to="/compras_acima_10_reais"
          label_button="Acima de 10 reais"
        />
        <br />
        <Separador />
        <br />
        <BotaoLink
          to="/compras_abaixo_10_reais"
          label_button="Abaixo de 10 reais"
        />
        <br />
        <Separador />
        {/* <br />
        <BotaoLink
          to="/carrinho_compras"
          label_button="Carrinho de compras"
        /> */}
      </Lista>
    </ContainerEstilizado>
  );
}
