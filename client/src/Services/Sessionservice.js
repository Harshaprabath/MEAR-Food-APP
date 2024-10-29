import React, { useState, useEffect } from 'react';
import AuthService from './Authservices';

function Sessionservice() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userSession = await AuthService.getProfile();
                setSession(userSession);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };
        fetchProfile();
    }, []);

    return session; // Return the session object
}
export default Sessionservice;
