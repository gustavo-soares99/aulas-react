import React from "react";
import Produto from "./Produto";

const UseEffectAula = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    console.log("Executou");
  }, []);
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </div>
  );
};

export default UseEffectAula;
