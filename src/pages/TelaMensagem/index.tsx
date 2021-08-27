import { Container } from '../../components/Container';
import styled from "styled-components";
import { Titulo } from '../../components/Titulo';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Spinner } from '../../components/Spinner';

const ContainerEstilizado = styled(Container)`
  width: 100%;
  height: 100%;
`;

const Mensagem = styled.div`
  background-color: white;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

export function TelaMensagem() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  });

  return (
    <ContainerEstilizado>
      <Mensagem>
        <Titulo titulo="Compra realizada" />
        <Spinner />
      </Mensagem>
    </ContainerEstilizado>
  );
}