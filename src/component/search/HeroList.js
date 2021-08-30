import React from 'react'
import { HeroCards } from './HeroCards'

export const HeroList = ({results}) => {
    
    return (
        <div className="row row-cols-1 row-cols-md-1 g-4">
            {
                results.map(heroe => (
                    <HeroCards
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))
            }
            
        </div>
    )
}
