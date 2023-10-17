import styled from 'styled-components';
import computador from '../../../public/json/compu.json';

const Hstyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    color:  ${props => props.theme.fontColor};

`
const StyledCompu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    img{
        border-radius: 12px;
    }

    ul{
        position: absolute;
    }

    li{
        
        position: relative;
        font-weight: 600;
        color: #00ade2;
        font-size: 22px;
        
    }

    a{
       
        text-decoration: none;
        color: #7da7d1;
        text-shadow: 1px 1px 2px #020405;
        display: flex;
        opacity: 0.6;
    } 

    a:hover{
       opacity: 1;
       cursor: pointer;
    }
    
    
    .processador{
        bottom: 12px;
        left: 100px; 
    }
    .memoria{
        top: 12px;
        left: 200px;
    }
    .cooler{
        bottom: 200px;
        right: 128px;
    }
    .ssd{
        top: 24px;
        left: 100px;
    }
    .placa_mae{
        bottom: 200px;
        left: 290px;
    }
    .placa_video{
        top: 64px;
    }
`


export default function Computador(){

    const pecas = ['Processador', 'Memoria Ram', 'Cooler', 'SSD', 'Placa Mãe', 'Placa de Video']


    return(
        <>
            <Hstyled>
                <h1>Computador, peça por peça</h1>
            </Hstyled>
            
            {computador.map(compu => {
                return(

                    <StyledCompu>    
                        <ul>
                            <li >
                                <a  className='processador'>Processador</a>
                            </li>
                            <li  className='memoria'>
                                <a >Memoria Ram</a>
                            </li >
                            <li  className='cooler'>
                               <a >Cooler</a> 
                            </li >
                            <li  className='ssd'>
                                <a >SSD</a>
                            </li >
                            <li  className='placa_mae'>
                                <a >Placa Mãe</a>
                            </li >
                            <li  className='placa_video'>
                                <a >Placa de Video</a>
                            </li >
                        </ul>
                        <img width={750} src={compu.imagem}  alt={compu.nome} />
                    </StyledCompu>
                )
            })}
        </>
    )

}