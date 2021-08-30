import React from 'react'



export const TeamHeroCard = ({ heroe }) => {
    

    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={heroe.image.url} className="img-fluid rounded-3" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{heroe.name}</h5>
                        <ul>
                            <li> hola</li>
                            <li> hola</li>

                        </ul>          
                    </div>
                </div>
            </div>
        </div>
       
    )
}
