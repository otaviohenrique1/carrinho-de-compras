import styled from "styled-components";
import { Item } from "../Item";

const ListaProdutosEstilizada = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;

export function ListaProdutos() {
  return (
    <ListaProdutosEstilizada>
      <Item />
      <Item />
      <Item />
      <Item />
    </ListaProdutosEstilizada>
  );
}