import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const StyledButton = styled.button`
        position: absolute;
        left: 0px;
        top: 20%;
        margin-top:12px ;
        padding: 12px;
        max-width: 100px;
        justify-content: center;
        display: flex;
        align-items:center;
        gap: 4px;
        border: 0px solid;
        background-color: transparent;
        font-size: 32px;
        color: ${props => props.theme.fontColor};
`   

export default function VoltarButton(){
    return(
        <>
            <StyledButton>
                <BiArrowBack/>
            </StyledButton>
        </>
    )
}