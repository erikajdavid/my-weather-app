import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const Favourited = ({ weather, user }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [fbData, setFbData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const database = getDatabase();
        const userUID = user ? user.uid : null;
        if (userUID) {
            const childRef = ref(database, `users/${userUID}`);
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
        if (!user) {
            navigate('/signup');
            return;
        }

        setIsFavorited(!isFavorited);

        if (user) {
            const cityName = weather.name;
            const database = getDatabase();
            const childRef = ref(database, `users/${user.uid}/favoriteCity`);

            if (isFavorited) {
                const updatedFbData = fbData.filter(item => item !== cityName);
                setFbData(updatedFbData);
            } else {
                push(childRef, cityName);
            }
        }
    };

    return (
        <i
            className={` ${isFavorited ? 'fa-solid fa-heart faHeartSolid' : 'fa-regular fa-heart faHeartOutline'}`}
            onClick={handleFavoriteClick}
        ></i>
    );
}

export default Favourited;
