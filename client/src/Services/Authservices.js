import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth';

// Register user
const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

// Get user profile session servive also use thi functon
const getProfile = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        };
        const response = await axios.get(`${API_URL}/profile`, config);
        return response.data;
    }
};

//authoraization
const Authorization = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const session = localStorage.getItem('user'); // Check session (modify if using other storage)

        // Check if session is null and the current path is '/profile'
        if (!session && location.pathname === '/profile') {
            navigate('/sininup'); // Redirect to signup page
        }
    }, [navigate, location]);

    return null; // This component doesn't render anything
};

const AuthService = {
    register,
    login,
    logout,
    getProfile,
    Authorization,
};

export default AuthService;
