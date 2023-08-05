import axios from "axios"
import { endpoints } from "./endpoints"

export const getCrews = async () => {
    try {
        const {data} = await axios.get(endpoints.crew);
        return data;
    } catch (error) {
        return error
    }
}

export const getCrew = async (id) => {
    try {
        const {data} = await axios.get(`${endpoints.crew}/${id}`)
        return data;
    } catch (error) {
        return error
    }
}