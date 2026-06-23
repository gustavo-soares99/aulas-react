import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const UseStateAula = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({nome: "Gustavo", idade: "27"})
  const [modal, setModal] = React.useState(false);
  // let ativo = true;

  function handleClick() {
    setAtivo(!ativo);
    setDados({...dados, faculdade: "Possui Faculdade"})
  }

  return (
    <div>
      <h1>UseState</h1>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
    </div>
  );
};

export default UseStateAula;
