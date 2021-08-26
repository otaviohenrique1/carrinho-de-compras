import styled from "styled-components";
import trufa from "../../assets/trufa.jpg";
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

export function Item() {
  return (
    <ItemEstilizado>
      <Imagem src={trufa} alt="Trufa" />
      <ItemDadosContainer>
        <span>Trufa de morango</span>
        <span>{`R$ ${ajustaPreco(1.23)}`}</span>
        <span>{`R$ ${ajustaPreco(1.11)}`}</span>
      </ItemDadosContainer>
    </ItemEstilizado>
  );
}