import axios from "axios"
import { endpoints } from "./endpoints"

export const getDestinations = async () => {
    try {
        const {data} = await axios.get(endpoints.articles);
        return data;
    } catch (error) {
        return error
    }
}

export const getDestination = async (id) => {
    try {
        const {data} = await axios.get(`${endpoints.destinations}/${id}`)
        return data;
    } catch (error) {
        return error
    }
}