import dataJson from "../../utils/acima-10-reais.json";
import { CarrinhoCompras } from '../CarrinhoCompras';
import { useHistory } from "react-router-dom";

export function ComprasAcima10Reais() {
  const history = useHistory();

  function handleClick() {
    history.push('/tela_mensagem');
  }

  return (
    <CarrinhoCompras
      data={dataJson.items}
      valor_preco_total={dataJson.totalizers[0].value}
      onClick={handleClick}
    />
  );
}

/*
import { Container } from '../../components/Container';
import styled from "styled-components";
import { Titulo } from '../../components/Titulo';
import { ContainerBotoes } from '../../components/Botao';
import { Separador } from '../../components/Separador';
import { Preco } from '../../components/PrecoTotal';
import { ListaProdutos } from '../../components/ListaProdutos';
import { Item } from "../../components/Item";
import dataJson from "../../utils/acima-10-reais.json";

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

export function ComprasAcima10Reais() {
  return (
    <Container>
      <Produtos>
        <Titulo titulo="Meu carrinho" />
        <Separador />
        <ListaProdutos>
          {dataJson.items.map((item) => {
            return (
              <Item
                key={item.uniqueId}
                name={item.name}
                price={(item.price/100)}
                sellingPrice={(item.sellingPrice/100)}
                imageUrl={item.imageUrl}
                detailUrl={item.detailUrl}
              />
            );
          })}
        </ListaProdutos>
        <Separador />
        <Preco valor_preco={(dataJson.totalizers[0].value/100)} />
        <Separador />
        <ContainerBotoes
          label_button="Finalizar compra"
        />
      </Produtos>
    </Container>
  );
}
*/