
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { peticionAxiosGet } from '../../helpers/peticionAxiosGet';
import { Resultados } from './Resultados';

export const SearchHeroe = () => {
    const validate = values => {
        const errors = {};
        if (!values.heroeToSearch) {
            errors.heroeToSearch = 'Heroe no ingresado';
        } else if (values.heroeToSearch.length < 3) {
            errors.heroeToSearch = 'Ingrese más de dos carácteres';
        }
        return errors;
    };
    const [resultSearch, setResultSearch] = useState([]);
    
    const formik = useFormik({
        initialValues: {
            heroeToSearch: '',
            
        },
        validate,
        onSubmit: (values) => {
            peticionAxiosGet(values.heroeToSearch)
            .then(results=>{
                setResultSearch(results); 
            });
            
        },
    });
    return (
        <>
            <div className="row">
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-group mt-2">
                        <input 
                            id="heroeToSearch"
                            type="text" 
                            className="form-control"
                            name="heroeToSearch"
                            placeholder="Search heroe"
                            onChange={formik.handleChange}
                            value={formik.values.heroeToSearch}   
                        />
                        <button 
                            className="btn btn-secondary" 
                            type="submit" 
                            id="button-addon2"
                        >Button</button>
                    </div>
                    {formik.errors.heroeToSearch ? 
                        <div className="error">
                            <small>
                                {formik.errors.heroeToSearch}
                            </small>
                        </div> : null
                    }
                </form>
            </div>
            <div className="row">
                <Resultados results={resultSearch}/>
            </div>
        </>
        
    );
}
