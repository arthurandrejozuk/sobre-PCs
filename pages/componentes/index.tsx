import Cards from "app/components/Cards";
import Components from "app/components/pagesPrototype/components";

export default function PageComponentes() {
    return(
        <Components
            children={<Cards />} titulo={"Componentes"}        />
    )
}