import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Registration API
export const registerForEvent = async (data: any) => {
    const response = await api.post('/registrations', data);
    return response.data;
};

export const getRegistrationCount = async () => {
    const response = await api.get('/registrations/count');
    return response.data;
};

export const getEvents = async () => {
    // ... existing code ...
    const response = await api.get('/events');
    return response.data;
};

export default api;
