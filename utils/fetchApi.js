import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url) => {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key": "cbae436246mshc0fece216ba5adfp155bdbjsne0e0949121d9",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
    });
    return data;
};