import styled from 'styled-components';
import catalogo from '../../../json/card.json';

const StyledDiv = styled.div`
    
    
    display: flex;
    align-items: center;
    margin-left: 100px;
    padding-right:12px ;
    border-radius: 4px;
    gap: 16px;
    margin-right: 100px;
    background-color: #265df5;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 700px;
    img{
        width: 250px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    
    @media( max-width: 700px) {
        flex-wrap: wrap;
        max-width: 300px;
        padding-right:0;
        img{
            width: 100%;    
        }
        h1{
            padding: 0 12px;
        }
        p{
            padding: 0 12px 12px;
        }
    }
   
`
const StyledDivDesc = styled.div`
    
    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    div{
        align-self: end;
        margin: 12px;
    }
    button{
        background-color: rgb(255, 165, 0);
        padding: 12px ;
        border-radius: 12px;
        border: 2px solid rgb(110, 72, 1);
    }
    button:hover{
        cursor: pointer;
    }
    p{
        display:inline-block;
        margin-top: 8px ;
        color: aliceblue;
    }

    h1{
        color: antiquewhite;
    }
`

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export default function Cards () {
    return(
        <StyledSection>
            {catalogo.map(item => {
                return(
                    <StyledDiv key={item.id}>
                        <img src={item.imagem} alt={item.nome} />
                        <StyledDivDesc>
                            <h1>
                                {item.nome} 
                            </h1>
                            <p>
                                {item.descricao}
                            </p>
                            <div>
                                <button>
                                    <a style={{textDecoration:"none"}} href={item.endereco}>
                                        Ver mais 
                                    </a>   
                                </button>
                            </div>
                        </StyledDivDesc>
                    </StyledDiv>
                )
            })} 
        </StyledSection>
    )
}