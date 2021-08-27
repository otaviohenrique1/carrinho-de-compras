import styled from "styled-components";
import { ajustaPreco } from "../../utils/utils";

const ItemEstilizado = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Imagem = styled.img`
  width: 150px;
`;

const ItemDadosContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span:first-child {
    margin-bottom: 10px;
  }

  span:nth-child(2) {
    color: gray;
  }
  
  span:last-child, span:first-child {
    font-weight: bold;
    font-size: 20px;
  }
`;

export interface ItemProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
}

export function Item(props: ItemProps) {
  return (
    <ItemEstilizado>
      <Imagem src={props.imageUrl} alt={props.detailUrl} />
      <ItemDadosContainer>
        <span>{props.name}</span>
        <span>{`R$ ${ajustaPreco(props.price)}`}</span>
        <span>{`R$ ${ajustaPreco(props.sellingPrice)}`}</span>
      </ItemDadosContainer>
    </ItemEstilizado>
  );
}