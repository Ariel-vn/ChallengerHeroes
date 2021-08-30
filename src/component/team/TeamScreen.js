import React, { useContext } from 'react'
import { Context } from '../../reducers/Context'
import { TeamHero } from './TeamHero';

export const TeamScreen = () => {
    const {hero} = useContext(Context);
    console.log(hero);
    return (
        <div>
            <h1>Team</h1>
            <hr/>
            <TeamHero hero={hero} />
        </div>
    )
}
