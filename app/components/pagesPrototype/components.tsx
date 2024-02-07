import Banner from "app/components/Banner";
import Cabecalho from "app/components/Cabecalho";
import Footer from "app/components/Footer";
import { useState } from "react";

interface ComponentsProps {
    children: React.ReactNode
    titulo:string
    action?: () => void
    desativa?: boolean
    invisivel?: boolean
}

export default function Components({children, titulo, desativa, invisivel = false,action}:ComponentsProps){

    

    return(
        <>
           <Cabecalho action={action}/>
           <Banner desativa={desativa} banner="url('https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')">{titulo}</Banner>
            {children}
            
        </>
    )
}   