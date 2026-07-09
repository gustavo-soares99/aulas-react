import React from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + 1 / 10;
  }
}

const UseMemoAula = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem("preferido");
    console.log("Aconteceu o memo");
    return localItem;
  }, []);

  // const valor = React.useMemo(() => operacaoLenta(), []);

  return (
    <div>
      <h1>Aula use Memo</h1>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default UseMemoAula;
