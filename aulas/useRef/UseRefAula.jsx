import React from "react";

const UseRefAula = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const video = React.useRef();
  const inputElement = React.useRef();
  // console.log(video);

  function handleClick() {
    setComentarios([...comentarios, input])
    setInput("");
    inputElement.current.focus();
  }
  return (
    <div>
      <h1>Aula UseRef</h1>
      {/* <video ref={video} /> */}
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          ref={inputElement}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <br/>
        <button onClick={handleClick}>Enviar</button>
      </div>
    </div>
  );
};

export default UseRefAula;
