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
