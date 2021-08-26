import styled from "styled-components";
import { ajustaPreco } from "../../utils/utils";

const PrecoContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10px;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`;

interface PrecoProps {
  valor_preco: number;
}

export function Preco(props: PrecoProps) {
  const preco_total = ajustaPreco(props.valor_preco);
  return (
    <PrecoContainer>
      <span>Total</span>
      <span>{`R$ ${preco_total}`}</span>
    </PrecoContainer>
  );
}
