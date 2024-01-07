// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Substitua {{porta}} pelo número da porta real

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const addCourse = async (courseData) => {
    console.log('====================================');
    console.log(courseData);
    console.log('====================================');
    try {
        const response = await api.post('/courses', courseData);
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao adicionar curso: ${error.message}`);
    }
};


export default api;
