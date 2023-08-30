import Cards from "app/components/Cards";
import Components from "app/pagesPrototype/components";
import Head from "next/head";

export default function HomeScreen(){
    return(
        <>
            <Components titulo="Home">
                <Cards/>
            </Components>
        </>
    )
}   