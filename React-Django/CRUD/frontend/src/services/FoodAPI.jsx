import axios from 'axios'

const baseURL = "http://127.0.0.1:8000/api/";

export const fetchDataFromAPI = async (endpointPath) => {
    console.log(`Fetching Data From: ${baseURL}${endpointPath}`);
    const endpoint = `${baseURL}${endpointPath}`;
    
    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
        console.error('Error Fetching Data', error);
        return []
    }
}

export const createDataToAPI = async (endpointPath, payload) => {
    console.log(`Creating Data At: ${baseURL}${endpointPath}`);
    const endpoint = `${baseURL}${endpointPath}`;

    try {
        const response = await axios.post(endpoint, payload)
        return response.data
    } catch (error) {
        console.error('Error Creating Data', error);
        return null        
    }
}

export const updateDataToAPI = async (url, updatedData) => {
    console.log(`updating data to : ${url}`);
    try {
        const response = await axios.put(url, updatedData)
        return response.data
    } catch (error) {
        console.error('Error to update data: ', error);
        throw error        
    }
}

export const deleteDataFromAPI = async (url) => {
    console.log(`Deleted Data From: ${url}`);
    try {
        await axios.delete(url)
        return true
    } catch (error) {
        console.error('Error Deleing Data: ', error);
        return false
    }
}