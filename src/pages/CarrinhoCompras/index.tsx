import { Container } from '../../components/Container';
import styled from "styled-components";
import { Titulo } from '../../components/Titulo';
import { ContainerBotoes } from '../../components/Botao';
import { Separador } from '../../components/Separador';
import { Preco } from '../../components/PrecoTotal';
import { ListaProdutos } from '../../components/ListaProdutos';
import { Item, ItemProps } from "../../components/Item";

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

interface DataProps extends ItemProps {
  uniqueId: string;
}

interface CarrinhoComprasProps {
  data: DataProps[];
  valor_preco_total: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function CarrinhoCompras(props: CarrinhoComprasProps) {
  return (
    <Container>
      <Produtos>
        <Titulo titulo="Meu carrinho" />
        <Separador />
        <ListaProdutos>
          {props.data.map((item) => {
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
        <Preco valor_preco={(props.valor_preco_total/100)} />
        <Separador />
        <ContainerBotoes
          label_button="Finalizar compra"
          onClick={props.onClick}
        />
      </Produtos>
    </Container>
  );
}