import React, { useState, useEffect } from 'react';
import AuthService from '../../Services/Authservices';
import { useNavigate } from 'react-router-dom';
import Sessionservice from '../../Services/Sessionservice';


const Profile = () => {


    //log out

    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token from localStorage
        AuthService.logout();

        // Redirect to login page
        navigate('/');
    };


    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await AuthService.getProfile();
                setProfile(userProfile);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };
        fetchProfile();
    }, []);

    const session = Sessionservice(); // Call Sessionservice to get the session data

    if (!session) {
        return <div>Loading session...</div>; // Handle loading or null session
    }

    return (
        <div className='xxx' >
            <h1>Profile</h1>
            {profile ? (
                <div>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    <p>Mobile: {profile.mobile}</p>
                    <button onClick={handleLogout}>log out</button>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
