import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

const Arrow = styled.div`
    background-color: transparent;
    border-radius: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-top: 16px;
    a{
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }
`

export default function TopButton() {


    return(
       <Arrow>
           <a href='#menu'><AiOutlineArrowUp size={28}/></a>
       </Arrow>
    )
}