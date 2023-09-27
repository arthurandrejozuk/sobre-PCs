import cards from '../../public/json/card.json';
import Components from 'app/components/pagesPrototype/components';
import Informacao from 'app/components/Informacao';

export const getStaticPaths = (async () => {
    const paths = cards.map(componente => {
        return {params: {id:`${componente.id}`}}
    })
    return{
        paths: paths,
        fallback: false,
    }
})

export async function getStaticProps(context) {
    const id = context.params.id !== undefined ? context.params.id : null;
    const componente = cards.find((atual) => {
        if(atual.id === id){
            return true
        }
        return false
    })
    return{
        props:{
            id: componente?.id,
            name: componente?.nome,
            image: componente?.imagem,
            description: componente?.descricao,
            adress: componente?.endereco
        }
    }
}

export default function componente(props){
    return(
        <Components 
        titulo={props.name}
        children={
            <Informacao 
                imagem={props.image}
                titulo={props.name} 
                descricao='Al contrario del pensamiento popular,
                el texto de Lorem Ipsum no es simplemente texto aleatorio. 
                Tiene sus raices en una pieza clsica de la literatura del Lat
                in, que data del año 45 antes de Cristo, haciendo que
                 este adquiera mas de 2000 años de antiguedad. Richard Mc
                 Clintock, un profesor de Latin de la Universidad de Hampde
                 -Sydney en Virginia, encontró una de las palabras más oscura
                 s de la lengua del latín, "consecteur", en un pasaje de Lorem 
                 Ipsum, y al seguir leyendo distintos textos del latín, de
                 cubrió la fuente indudable. Lorem Ipsum viene de l
                 as secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum   
                 et Malorum" (Los Extremos del Bien y El Mal) por Cicero, 
                 escrito en el año 45 antes de Cristo. Este libro es un 
                 tratado de teoría de éticas, muy popular durante el Ren
                 acimiento. La primera linea del Lorem Ipsum, "Lorem ipsum
                  dolor sit amet..", viene de una linea en la sección 1.10.32 El 
                  trozo de texto estándar de Lorem Ipsum usado desde el año 15
                  00 es reproducido debajo para aquellos interesados. 
                  as secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et 
                  Malorum" por Cicero son también reproducidas en su fo
                  ma original exacta, acompañadas por versiones en Inglés 
                  de la traducción realizada en 1914 por H. Rackham.'
            />
        }
    />
    )
}