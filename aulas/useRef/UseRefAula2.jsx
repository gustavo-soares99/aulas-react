import React from "react";

const UseRefAula2 = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNoficacao] = React.useState(null);
  const timeOutRef = React.useRef()

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNoficacao("Item adicionado ao carrinho");
    clearTimeout(timeOutRef.current)
    timeOutRef.current = 
    setTimeout(() => {
      setNoficacao(null) 
    }, 2000)
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicoinar Carrinho {carrinho}</button>
    </div>
  );
};

export default UseRefAula2;
