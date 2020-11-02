import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/Pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Opa!</h1>
      <p>Tudo pronto e funcionando.</p>
    </Container>
  )
}
export default Home
