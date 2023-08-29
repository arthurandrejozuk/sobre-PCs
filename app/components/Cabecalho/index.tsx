import styled from "styled-components";
import Logo from "../Logo";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import MenuHam from "../MenuHam";
import {AiOutlineCloseCircle as Fecha, AiTwotoneHome} from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';


const StyledHeader = styled.header`
    
    width: 100%;
    background-color: #012657;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    
    .menu-hamburguer{
        font-size: 40px;
        transition: 400ms;
        color: rgb(29, 145, 240);
    }
    .menu-hamburguer:hover{
        color: antiquewhite;
        cursor: pointer;
    }
    
    @media (max-width: 700px){
        h1{
            display: none;
        }
    }
    `;

const Opcoes = styled.a`

    color: rgb(29, 145, 240) ;
    text-decoration: none;
    font-size: 32px;
  
    @media (min-width: 700px){
        display: none;
    }
    `


const OpcoesPc = styled.a`

    color: rgb(29, 145, 240) ;
    text-decoration: none;
    font-size: 24px; 
    transition: 500ms;
    
    @media (max-width: 700px){
        display: none;    
  
    }
    `

const StyledItems = styled.div`
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;;
    flex-wrap: wrap;
    color: #043d6b;
    text-align: center;
    a:hover{
        color: rgb(230, 245, 255);
        font-size: 35;
    }
`


export default function Cabecalho() {
    
    const [ativa, setAtiva] = useState(false);

    return(
        <StyledHeader id="menu">
            <Logo> 
            <h1>
                PCs & Tecnologia
            </h1>
            
            </Logo>
            <StyledItems>
                <StyledItems>
                    <Opcoes href="/">
                        <AiTwotoneHome />                    
                    </Opcoes>
                    <Opcoes href="/sobre">
                        <FcAbout />
                    </Opcoes>
                </StyledItems>
                <OpcoesPc href="/">
                    Início
                </OpcoesPc>
                <OpcoesPc href="/sobre">
                    Sobre
                </OpcoesPc>
            </StyledItems>
            <section>
                <GiHamburgerMenu  onClick={() => !ativa ? setAtiva(true): setAtiva(false)} className="menu-hamburguer"/>
                <MenuHam ativado={ativa}><Fecha onClick={() => setAtiva(false)}/></MenuHam>
            </section>
        </StyledHeader>
    )
}