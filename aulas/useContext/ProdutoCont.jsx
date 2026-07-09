import React from "react";
import { GlobalContext } from "./GlobalContext";

const ProdutoCont = () => {
  const global = React.useContext(GlobalContext);

  function handleClick(){
    global.setContar((contar) => contar + 1)
  }
  return (
    <div>
      <h1>Página context</h1>
      <p>{global.contar}</p>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default ProdutoCont;
