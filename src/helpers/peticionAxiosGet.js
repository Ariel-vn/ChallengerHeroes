import axios from "axios";

export const peticionAxiosGet=async(name)=>{
    const token = "10222809938750280";
    const { data } = await axios.get(`https://superheroapi.com/api/${token}/search/${name}`);
    const { results } = await data;
    return results

}