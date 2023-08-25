import Informacao from "app/components/Informacao";
import Components from "app/pagesPrototype/components";


export default function Storage(){
    return(
        <Components 
            titulo="Storage"
            children={
                <Informacao 
                    imagem="https://images.unsplash.com/photo-1661347334036-d484f970b1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    titulo="Storage" 
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