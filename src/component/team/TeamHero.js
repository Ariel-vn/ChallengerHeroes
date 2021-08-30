import React from 'react'
import { TeamHeroCard } from './TeamHeroCard'

export const TeamHero = ({hero}) => {

    return (
        <div className="row row-cols-md-3 ">
            {
                hero.map(heroe => (
                    <TeamHeroCard
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))
            }

        </div>
    )
}
