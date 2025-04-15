import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL;

export const fetchDataFromAPI = async (endpointPath) => {
    console.log('Fetching From: ', `${baseURL}${endpointPath}`);
    const endpoint = `${baseURL}${endpointPath}`
    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
        console.error('Error Fetching Data ', error);
        return []
    }
}