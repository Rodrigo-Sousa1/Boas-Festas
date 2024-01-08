import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import Novo from './components/festas.jsx'
import Natal from './components/natal.jsx'

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const Botao = styled.button`
  position:absolute;
  height:6vh;
  width:3%;
  background-color:gray;

`
const NavBar = styled.nav`
  width:10%;
  height:10vh;
  position:absolute;
  margin-top:30px;
  background-color: white;


`
const Linha = styled.li`
  list-style:none;
  `
const LINK = styled(Link)`
  text-decoration:none;
  color:black; 
  margin:5px;
  font-size:17px;
  display:flex;
  justify-content:center;
  align-items:center;
`



function App() {
  const [count, setCount] = useState(0)

  const [open, useOpen] = useState(false)


  const Mudar = () => {
    if (open === false) { useOpen(true) }
    else { useOpen(false) }
  }

  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Botao onClick={Mudar}>☰</Botao>

        {open && <section>
          <NavBar>
            <ul>
              <Linha>
                <LINK to="/">Ano Novo</LINK>
              </Linha>
              <Linha>
                <LINK to="natal">Feliz Natal</LINK>
              </Linha>
            </ul>
          </NavBar>
        </section>}
        <Routes>
          <Route path="/" element={<Novo />} />
          <Route path="natal" element={<Natal />} />
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
