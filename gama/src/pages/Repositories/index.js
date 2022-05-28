import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'


export default function Repositories() {
    const [repositories, setRepositories ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        // console.log(repositoriesName)

        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            localStorage.clear()
        } else {
            navigate('/')
        }

    }, [])

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>{repository}</S.ListItem>
                    )
                }) }          
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
