import styled, { createGlobalStyle } from "styled-components"

const Headerstyled = styled.header`
 background-image: url(https://img.freepik.com/vetores-gratis/celebracao-de-ano-novo-com-fundo-bege-brilhante-de-fogos-de-artificio_53876-95649.jpg);
 background-repeat:no-repeat;
 background-size:cover;
 height:100vh;
 width:100%;
 display:flex;
 align-items:center;
    
`

const Secao1 = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
const Text1 = styled.h2`
    width:30%;
    text-align:center;
    font-size:50px;
    font-family: 'Playfair Display', serif;
    color:#DAA520;
    `
const Text2 = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size:40px;
    text-align:center;
    width:30%;
    color:#cd7f32;
`

const Par = styled.p`

    font-family: 'Poppins', sans-serif;
    height:25vh;
    width:50%;
    display:flex;
    align-items:center;
    text-align:center;
`

export default function Novo() {
    return (
        <Headerstyled>
            <Secao1>
                <Text1>Gratidão</Text1>
                <Text2>2023</Text2>
                <Text1>Bem Vindo</Text1>
                <Text2>2024</Text2>
                <Par> Que 2024 seja um capítulo de crescimento, aprendizado e gratidão. Que saibamos valorizar as pequenas coisas
                    e celebrar as grandes conquistas. Que este novo ano nos surpreenda com boas notícias, realizações
                    extraordinárias e momentos de felicidade compartilhada.</Par>
            </Secao1>



        </Headerstyled>
    )
}

