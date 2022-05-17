// os hooks sao apis que facilitaram a construção de codigos mais simples em relação ao estado dos componentes
import React, { useState } from 'react'

import axios from 'axios'

function App(props) {
  const [ usuario, setUsuario ] = useState('')
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => console.log(response))
  }

  return ( 
    //para resgatar propriedades inseridas no render, utiliza-se o props. Elas devem estar encapsuladas em uma tag, no caso um fragment (sem nome div, por exemplo)
    <>
      <p>{ usuario }</p>
      <h1>{props.title} <br/>{props.user}</h1>
    {/* class é um nome reservado no react e por isso, utiliza-se o className */}
    <input /*name="usuario" id="usuario"*/ className="usuarioInput" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
