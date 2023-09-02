import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const Favourited = ({ weather, user }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [fbData, setFbData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const database = getDatabase();
        const userUID = user ? user.uid : null;
        if (userUID) {
            const childRef = ref(database, `users/${userUID}/favoriteCity`);
            onValue(childRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setFbData(Object.values(data));
                }
            });
        }
    }, [user]);

    useEffect(() => {
        if (user && fbData.includes(weather.name)) {
            setIsFavorited(true);
        } else {
            setIsFavorited(false);
        }
    }, [user, fbData, weather]);

    const handleFavoriteClick = () => {
        if (!user) {
            navigate('/signup');
            return;
        }

        const cityName = weather.name;
        const database = getDatabase();
        const childRef = ref(database, `users/${user.uid}/favoriteCity`);

        if (isFavorited) {
            const updatedFbData = fbData.filter(item => item !== cityName);
            setFbData(updatedFbData);
            set(childRef, updatedFbData);
        } else {
            push(childRef, cityName);
        }

        setIsFavorited(!isFavorited);
    };

    return (
        <i
            className={`fa ${isFavorited ? 'fa-solid faHeartSolid' : 'fa-regular faHeartOutline'} fa-heart`}
            onClick={handleFavoriteClick}
        ></i>
    );
}

export default Favourited;
