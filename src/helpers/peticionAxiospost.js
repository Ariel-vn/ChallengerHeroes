import axios from "axios";

export const peticionAxiospost = async (values) => {
    const respuesta = await axios.post('http://challenge-react.alkemy.org/', {
        email: values.email,
        password: values.password
    });
    const { token } = await respuesta.data;
    localStorage.setItem("token", token);
}