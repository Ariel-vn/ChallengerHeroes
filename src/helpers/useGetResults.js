import { useEffect, useState } from "react"
import { peticionAxiosGet } from "./peticionAxiosGet";


export const useGetResults=(name)=>{
    const [resultado, setResultado] = useState([]);
    useEffect(() => {
        peticionAxiosGet(name)
        .then(results=>{
            setResultado(results)
        })
        
    }, [name])
    return resultado
}