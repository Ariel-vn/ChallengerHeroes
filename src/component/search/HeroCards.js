import React, { useContext } from 'react'
import { Context } from '../../reducers/Context'
import { types } from '../../types/types'

export const HeroCards = ({heroe}) => {
    const {dispatchHero} = useContext(Context)
    const handleSelectHero=()=>{
    //Utilizo dispatch para agregar los heroes al state "hero", son los miembros del equipo

        dispatchHero({
            type:types.addtHero,
            payload:{
                name:heroe.name,
                image:heroe.image.url,
                powerstats: heroe.powerstats
            }
        })
    }

    return (
        <div className="col-md-auto " style={{ maxWidth: 300 }}>
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
