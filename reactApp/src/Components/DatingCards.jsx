import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card'
import axios from 'axios';
import './DatingCards.css';

// Mock data
const mockPeople = [
  { name: "Person 1", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1GOtMqx1Ps7pECsTH_Cef7kfw-4PC3MfVA&s" },
  { name: "Person 2", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqza8cZZu8ywOnqNwtuXI3fjIqtRrom0dV0ocFfxqjE0iOj6wR5hZWyhUhY1UgOe9g44&usqp=CAU" },
  { name: "Person 3", imgUrl: "https://i.dailymail.co.uk/i/newpix/2018/08/09/10/4EF3F2B100000578-6042681-Hot_stuff_Daily_Mail_Australia_can_reveal_the_stunning_blonde_s_-a-8_1533807262661.jpg" },
  { name: "Person 4", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1GOtMqx1Ps7pECsTH_Cef7kfw-4PC3MfVA&s" },
  // Add more mock data as needed
];

export default function DatingCards() {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;
        console.log(`useEffect called. API URL: ${apiUrl}`);

        // Use mock data instead of making an API call
        setPeople(mockPeople);
        console.log(`Using mock data:`, mockPeople);

        // Commented out API call code
        // if (!apiUrl) {
        //     console.error('API URL is undefined. Check your environment variables.');
        //     setError('API URL is not set');
        //     return;
        // }
        // async function fetchData() {
        //     try {
        //         const response = await axios.get(`${apiUrl}/api/people/list`);
        //         setPeople(response.data);
        //         console.log(`The people are:`, response.data);
        //     } catch (err) {
        //         console.error('Error fetching data:', err);
        //         setError('Failed to fetch data');
        //     }
        // }
        // fetchData();
    }, []);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='datingCards'>
            <div className='datingCards__cardContainer'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}