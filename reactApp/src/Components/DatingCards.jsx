import {useEffect,useState} from 'react';
import TinderCard from 'react-tinder-card'
import axios from 'axios';
import './DatingCards.css';

export default function DatingCards(){
    const [people,setPeople] = useState([]);


    useEffect(()=>{
        console.log(`useEffect called ${import.meta.env.VITE_API_URL}`);
        
        
        async function fetchData(){
            try{
                const people = await axios.get(`${import.meta.env.VITE_API_URL}/api/people/list`);
                setPeople(people.data);
                console.log(`The people are: ${people.data}`);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);

    
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <>
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
        </>
    )
}