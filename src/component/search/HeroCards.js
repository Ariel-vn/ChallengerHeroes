import React from 'react'

export const HeroCards = ({heroe}) => {
    console.log(heroe)
    return (
        <div className="col" style={{ maxWidth: 300 }}>
            <div className="card border-primary mb-3">
                <img src={heroe.image.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{heroe.name}</h5>
                        <button
                            className="btn btn-primary"
                        >Agregar</button>
                    </div>
            </div>
        </div>
    )
}
