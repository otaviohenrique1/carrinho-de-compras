import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Compras } from "./Compras";
import { ComprasAbaixo10Reais } from "./ComprasAbaixo10Reais";
import { ComprasAcima10Reais } from "./ComprasAcima10Reais";
import { Home } from "./Home";
import { TelaMensagem } from "./TelaMensagem";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tela_mensagem" component={TelaMensagem} />
          <Route exact path="/compras_abaixo_10_reais" component={ComprasAbaixo10Reais} />
          <Route exact path="/compras_acima_10_reais" component={ComprasAcima10Reais} />
        </Switch>
      </BrowserRouter>
    </>
  );
}