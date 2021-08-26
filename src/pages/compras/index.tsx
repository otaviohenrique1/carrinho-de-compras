import { Container } from '../../components/Container';
import styled from "styled-components";
import { Titulo } from '../../components/Titulo';
import { ContainerBotoes } from '../../components/Botao';
import { Separador } from '../../components/Separador';
import { Preco } from '../../components/PrecoTotal';
import { ListaProdutos } from '../../components/ListaProdutos';

const Produtos = styled.div`
  background-color: white;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

export function Compras() {
  return (
    <Container>
      <Produtos>
        <Titulo titulo="Meu carrinho" />
        <Separador />
        <ListaProdutos />
        <Separador />
        <Preco valor_preco={9.55} />
        <Separador />
        <ContainerBotoes />
      </Produtos>
    </Container>
  );
}