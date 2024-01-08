import styled, { createGlobalStyle } from "styled-components"

const Headerstyled = styled.header`
 background-image: url(https://static.vecteezy.com/ti/fotos-gratis/p1/4155443-natal-feriado-fundo-gratis-foto.jpg);
 background-repeat:no-repeat;
 background-size:auto;
 height:100vh;
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:flex-end;
`

const Secao1 = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:50%;
    height:50vh;
`
const Text1 = styled.h2`
    font-size:75px;
    margin-bottom:30px;
    text-align:center;
    font-family: 'Crimson Text', serif;
    `
const Text2 = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size:40px;
    font-family: 'Crimson Text', serif;

`
const Par = styled.p` 
    height:25vh;
    width:50%;
    display:flex;
    align-items:center;
    text-align:center;
    font-family: 'Pacifico', cursive;
    font-size:20px;  
`

export default function Natal() {
    return (
        <Headerstyled>
        
            <Secao1>
            <Text1>Feliz Natal</Text1>

            <Par>Que o espírito natalino traga paz, amor e alegria para nossos corações e lares, abençoando cada momento</Par>
            {/* <Text2>Boas Festas</Text2> */}

            </Secao1>
        </Headerstyled>
    )
}