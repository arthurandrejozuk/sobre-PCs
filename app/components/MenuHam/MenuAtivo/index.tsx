import styled from "styled-components";
import pecas from "../../../../public/json/card.json";
import { AiTwotoneHome } from "react-icons/ai";
import { PiComputerTowerFill } from "react-icons/pi";
import { MdMore } from "react-icons/md";

const StyledMenu = styled.div`

    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
     list-style-type: none;
     display: flex;
     flex-direction: column;
     gap: 32px;
     align-items: start;
     margin: 32px ;
     width: 100%;
     height: 100%;
    }
    h1{
        font-weight: 500;
        color: antiquewhite;
        
    }
    h2{
        color: antiquewhite;
        margin-bottom:12px;
    }
    a{
        text-decoration: none;
        color: rgb(29, 145, 240);
        font-size: 24px;
        display: flex;
        gap: 8px;
    }
    a:hover{
        color:antiquewhite;
        cursor: pointer;
    }
    z-index: 0;
   
`


 
export default function MenuAtivo() {
    return(
        <StyledMenu>
            <h2>Menu</h2>
            <ul>
            <a href="/"><AiTwotoneHome/><li>Home</li></a>
            <a href="/componentes"><PiComputerTowerFill/><li>Componentes</li></a>
            <a href="/sobre"><MdMore/><li>Sobre</li></a>
            <h1>Componentes:</h1>
               {pecas.map((item) => {
                return(
                    <li>
                        <a href={item.endereco}>
                            {item.nome}
                        </a>
                    </li>
                )
               })}
               
            </ul>
        </StyledMenu>
    )
}