import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

const Arrow = styled.div`
    background-color: #db9b11;
    border-radius: 100%;
    border: 1px solid #805804;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-top: 16px;
    a{
        text-decoration: none;
        color: black;
    }
`

export default function TopButton() {


    return(
       <Arrow>
           <a href='#menu'><AiOutlineArrowUp/></a>
       </Arrow>
    )
}