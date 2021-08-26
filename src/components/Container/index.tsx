import { ReactNode } from "react";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
  /* height: 100%; */
  background-color: lightsteelblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <ContainerEstilizado>
      {props.children}
    </ContainerEstilizado>
  );
}