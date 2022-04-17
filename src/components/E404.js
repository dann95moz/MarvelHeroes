import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ErrorH1, ErrorTextContainer } from '../styles/e404'

const E404 = () => {
    return (
        <Container>
            <ErrorTextContainer>
                <ErrorH1>error 404 personaje no encontrado </ErrorH1>
                <h3>Protocolo faltante... saliendo del programa</h3>
                <Link to='/'>Intenta volver a buscar con el nombre de un personaje de Marvel</Link>
            </ErrorTextContainer>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650133353/iron-man-char.72fe5e86_1_anq9mb.jpg" alt="" />
        </Container>
    )
}

export default E404