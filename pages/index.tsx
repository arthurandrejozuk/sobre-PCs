import Cards from "app/components/Cards";
import Computador from "app/components/Computador";
import Components from "app/components/pagesPrototype/components";
import { useState } from "react";

export default function HomeScreen(){
    const [desativa, setDesativa] = useState(true);
    return(
        <> 
            <Components action={() => {return setDesativa(!desativa);}} desativa={desativa} titulo="Home">
                <Computador desativa={desativa}/>
                <Cards/>
            </Components>
        </>
    )
}   