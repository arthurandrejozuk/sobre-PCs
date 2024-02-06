import styled from "styled-components";
import React, { useState } from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs'

const BotaoStyled = styled.div`
    
    z-index: 2;
    position: fixed;
    right: 80px;
    text-align: center;
    bottom: 120px;
    color: antiquewhite;
    border-radius:100%;
    background-color: transparent;
    :hover{
        cursor: pointer;
    }
`



export default function BotaoTheme({onClick}) {

  const [theme, setTheme] = useState(true)


  if(theme){
    return(
    
          <BotaoStyled onClick={onClick}>
             <MdDarkMode onClick={()=>{setTheme(!theme)}} size={32}/>
          </BotaoStyled>
      
    )
  } else {
    return(
      <BotaoStyled onClick={onClick}>
        <BsFillSunFill onClick={()=>{setTheme(!theme)}} size={32}/>
      </BotaoStyled>
    )
  }
}