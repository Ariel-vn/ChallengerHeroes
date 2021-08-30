import React from 'react'
import { SearchHeroe } from '../search/SearchHeroe'
import { TeamScreen } from '../team/TeamScreen'

export const HomeScreen = () => {

    
    return (
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className="titulo">
                    <h1>Challenger Heroes</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-3">
                    <SearchHeroe /> 
                </div>
                <div className="col-sm-12 col-lg-9">
                    <TeamScreen />
                </div>
            </div>
        </div>
        </>
    )
}
