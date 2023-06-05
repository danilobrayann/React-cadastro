// import React from 'react'
import People from './assets/pessoas.svg'
import Arrow from './assets/flecha.svg'

import { Container, H1, Imagem, ContainerIntes, InputLabel, Input, Button, ImgFlecha } from './styles'

// jsx
const App = () => {
  // o retorno sempre vai trazer arquivos html
  return (

    <Container >
      <Imagem src={People} alt='People' />
      <ContainerIntes>
        <H1>Olá </H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder='nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='idade' />

        <Button>Cadastra <ImgFlecha src={Arrow} alt="seta" /></Button>
      </ContainerIntes>
    </Container>

  )

}


export default App