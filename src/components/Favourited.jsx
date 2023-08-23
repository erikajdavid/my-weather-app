import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push } from 'firebase/database';

const Favourited = ({ weather, user }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [fbData, setFbData] = useState([]);

    useEffect(() => {
        const database = getDatabase(); // Initialize the database
        const userUID = user ? user.uid : null; // Get the user's UID from the user prop
        if (userUID) {
            const childRef = ref(database, `users/${userUID}`); // Update this to match your database structure

            onValue(childRef, (response) => {
                const data = response.val();
                if (data) {
                    const updatedFbData = Object.values(data);
                    setFbData(updatedFbData);
                }
            });
        }

    }, [user]);

    const handleFavoriteClick = () => {
        // Toggle the favorited state
        setIsFavorited(!isFavorited);

        // If user is logged in, push or remove weather data to/from Firebase
        if (user) {
            const cityName = weather.name;
            console.log('Favorited city:', cityName);

            const database = getDatabase(); // Initialize the database
            const childRef = ref(database, `users/${user.uid}`); // Update this to match your database structure
        
            console.log(user);

            if (isFavorited) {
                // Remove the weather object from the array
                const updatedFbData = fbData.filter(item => item !== cityName);
                setFbData(updatedFbData);
            } else {
                // Push the weather object to Firebase
                push(childRef, cityName);
            }
        }
    };

    return (
        <i className={`fa-regular fa-heart ${isFavorited ? 'favorited' : ''}`} onClick={handleFavoriteClick}></i>
    );
}

export default Favourited;
