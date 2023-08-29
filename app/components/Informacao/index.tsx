import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi'
import React from 'react';


const StyledDiv = styled.div`
    margin-right: 120px ;
    margin-left: 120px ;
    margin-top: 60px;
    margin-bottom: 200px;
    `


const StyledImg = styled.img`
    width: 250px;
    float: left;
    margin-right: 12px;
    border-radius: 8px;
    @media (min-width: 1000px){
        margin-bottom: 40px;
    }
    `

const StyledButton = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        padding: 12px;
        margin-top: 32px;
        display: flex;
        align-items:center;
        gap: 4px;
        background-color: #ffa600;
        border-radius: 12px;
        border: 1px solid;
    }
    button:hover{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    
    `
interface InformacaoProps {
   descricao: string
   titulo: string
   imagem: string
}

export default function Informacao({descricao, titulo, imagem}:InformacaoProps){
    
    return(
        <StyledDiv>
            <div>
                <StyledImg src={imagem} alt={titulo} />
            </div>
            
                <h1>{titulo}</h1>
                <p>
                   {descricao}
                </p>
    
           <StyledButton>
            <a href='/'>
                <button>
                    <BiArrowBack/>
                    Voltar
                </button>
            </a>
           </StyledButton>
        </StyledDiv>
       
    )
}