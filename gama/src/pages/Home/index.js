// os hooks sao apis que facilitaram a construção de codigos mais simples em relação ao estado dos componentes
import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

import { useNavigate } from 'react-router-dom'

function Home(props) {
  const [ usuario, setUsuario ] = useState('')
  const navigate  = useNavigate()
  const [erro, setErro] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        //obtendo o array da propriedade name, obtido da resposta da requisição:
        const repositories = response.data
        const repositoriesName = []
        repositories.map((repository) => {
          repositoriesName.push(repository.name) 
        })
        
        //o localStorage armazena o array de resposta, tendo o método setItem que recebe uma key que será o campo de armazenamento e o segundo campo, o array obtido da resposta convertido em formato json
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        
        navigate('/repositories')
      })
      .catch(err => {
        setErro(true)
      })
  }

  return ( 
    //para resgatar propriedades inseridas no render, utiliza-se o props. Elas devem estar encapsuladas em uma tag, no caso um fragment (sem nome div, por exemplo)
    <S.HomeContainer>
      <S.Content>
        {/* <p>{ usuario }</p>
        <h1>{props.title} <br/>{props.user}</h1> */}
      {/* class é um nome reservado no react e por isso, utiliza-se o className */}
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default Home;
