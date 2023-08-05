import axios from "axios"
import { endpoints } from "./endpoints"

export const getTechnology = async () => {
    try {
        const {data} = await axios.get(endpoints.technology);
        return data;
    } catch (error) {
        return error
    }
}

export const getTechnologies = async (id) => {
    try {
        const {data} = await axios.get(`${endpoints.technology}/${id}`)
        return data;
    } catch (error) {
        return error
    }
}