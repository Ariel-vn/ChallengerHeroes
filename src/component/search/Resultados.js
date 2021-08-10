import React, { useEffect } from 'react'
import { HeroList } from './HeroList'

export const Resultados = ({results}) => {
    // useEffect(() => {
    //      if (results!==undefined) {
    //         console.log(results)
         
    
    //      }
    //  }, [results])
    console.log(results)
        
    return (
        <div className="row">
            
                {
                    (results!==undefined)
                        ? <HeroList results={results}/>
                        :("resultado")
                }
            
            
            
        </div>
    )
}
