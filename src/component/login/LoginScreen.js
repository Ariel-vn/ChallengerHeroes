import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import imagen from "../../assets/superheroes.jpg";
import '../../styles/loggin.css';
import { Context } from '../../reducers/Context';
import { types } from '../../types/types';
import { peticionAxiospost } from '../../helpers/peticionAxiospost';




export const LoginScreen = () => {
    //Manejo de errores del formulario a través de Formik
    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Password requerido';
        }

        if (!values.email) {
            errors.email = 'Email requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email no válido';
        }

        return errors;
    };
    //dispatch para manejar el estado de la autenticación.
    const { dispatch } = useContext(Context);
    //estado para manejar el error de usuario y contraseñas no válidos en la petición
    const [error, setError] = useState();
    //estado para desabilitar el botón de login durante la petición.
    const [disableButton, setDisableButton] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validate,
        onSubmit: 
            async(values) => {
                setDisableButton(true);
                try {
                    //petición API para login
                    await peticionAxiospost(values);
                    dispatch({
                        type: types.login,
                    });
                    setDisableButton(false);
                }
                catch {
                    setError("Email y/o contraseña no válidos");
                    setDisableButton(false);
                }
            },
    });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-lg-8 align-self-center">
                    <div className="animate__animated animate__fadeIn">
                        <img className="img-fluid " src={imagen} alt="img" />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="box-loggin">
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                id="email"
                                className="form-control"
                                name="email"
                                type="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Enter your email"
                                value={formik.values.email}
                            />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email ? (
                                        <small>{formik.errors.email}</small>
                                    ) : null}
                                </div>
                            
                            <input
                                id="password"
                                className="form-control"
                                name="password"
                                type="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Password"
                                value={formik.values.password}
                            />
                            <div className="error">
                                {formik.touched.password && formik.errors.password ? (
                                    <small>{formik.errors.password}</small>
                                ) : null}
                            </div>
                        
                            <div className="d-grid gap-2 col-12 mx-auto">
                                <button 
                                    type="submit"
                                    className="btn btn-danger mt-1"
                                    disabled={disableButton}
                                >Login
                                </button>
                            </div>
                            <div className="error" >
                                {error}
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
        </div>    
    );
};
    

