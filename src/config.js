// API configuration
const API_BASE_URL = import.meta.env.PROD 
    ? 'https://inklesslms.com' 
    : 'http://localhost:5015'; // Local backend

export default API_BASE_URL;
