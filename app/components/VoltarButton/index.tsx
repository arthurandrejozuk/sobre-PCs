import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

const Arrow = styled.div`
    
    background-color: #db9b11;
    border-radius: 100%;
    border: 1px solid #805804;
    display: flex;
    width: 18px;
    display: flex;
    justify-content: end;
    align-items: end;

`

export default function VoltarButton() {


    return(
       <Arrow>
           <a href='#menu'><AiOutlineArrowUp/></a>
       </Arrow>
    )
}