import React from 'react'
import { SearchHeroe } from '../search/SearchHeroe'
import { Team } from '../team/Team'

export const HomeScreen = () => {

    
    return (
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className="titulo">
                    <h1>Challenger Heroes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <SearchHeroe /> 
                </div>
                <div className="col-sm-12 col-lg-8">
                    <Team />
                </div>
            </div>
        </div>
        </>
    )
}
