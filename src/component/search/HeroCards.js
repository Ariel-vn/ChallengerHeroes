import React, { useContext } from 'react'
import { Context } from '../../reducers/Context'
import { types } from '../../types/types'

export const HeroCards = ({heroe}) => {
    const {hero,dispatchHero} = useContext(Context)
    const handleSelectHero=()=>{
        const heroesId=hero.map(heroid=>heroid.id);
        if (!heroesId.includes(heroe.id)) {
            //Utilizo dispatch para agregar los heroes al state "hero", son los miembros del equipo.
            dispatchHero({
                type: types.addtHero,
                payload: {
                    id: heroe.id,
                    name: heroe.name,
                    image: heroe.image,
                    powerstats: heroe.powerstats
                }
            })
        }else{
            console.log("El heroe ya está en el equipo");
        }

    

        
    }

    return (
        <div className="col " style={{ maxWidth: 180 }}>
            <div className="card text-center mb-3 animate__animated animate__fadeInLeft">
                <img src={heroe.image.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{heroe.name}</h5>
                        <button
                        className="btn btn-primary"
                            onClick={handleSelectHero}
                        >Agregar</button>
                    </div>
            </div>
        </div>
    )
}
