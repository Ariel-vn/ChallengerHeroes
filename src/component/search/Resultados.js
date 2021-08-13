import React, { useEffect, useState } from 'react'
import { peticionAxiosGet } from '../../helpers/peticionAxiosGet';
import { HeroList } from './HeroList'

export const Resultados = ({ resultSearch}) => {
    const [heroe, setHeroe] = useState([]);
    useEffect(() => {
        if (resultSearch!==undefined) {
            peticionAxiosGet(resultSearch)
            .then(results => {
                setHeroe(results);
            });
              console.log("hola")
          }
    }, [resultSearch]);
    
        
    return (
        <div className="row ">
            
                {
                    (heroe!==undefined)
                        ? <HeroList results={heroe}/>
                        :("resultado")
                }
            
            
            
        </div>
    )
}
