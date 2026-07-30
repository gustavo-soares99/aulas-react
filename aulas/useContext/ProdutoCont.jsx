import React from "react";
import { GlobalContext } from "./GlobalContext";

const ProdutoCont = () => {
  const global = React.useContext(GlobalContext);
  if (global.dados === null) return null;
  return (
    <div>
      <h1>Página context</h1>
    <div>Produto: {global.dados.map((item) => <li key={item.id}>{item.nome}</li>)}</div>
      <button onClick={global.limparDados}>Limpar</button>
    </div>
  );
};

export default ProdutoCont;
