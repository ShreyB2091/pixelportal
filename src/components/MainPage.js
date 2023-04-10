import React, { useEffect, useState } from 'react'
import MyCard from './Card';

const MainPage = (props) => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://mmo-games.p.rapidapi.com/games?platform=${props.platform}&sort-by=release-date`, options)
        .then(response => response.json())
        .then(response => {
            let newCard = [];
            for(const game of response) {
                newCard = ([...newCard, {
                    title: game.title,
                    thumbnail: game.thumbnail,
                    genre: game.genre,
                    platform: props.platform,
                    releaseDate: game.release_date,
                    url: game.game_url,
                    id: game.id
                }]);
            }
            setCards(newCard.filter((item) => {
                return item.title.toLowerCase().includes(props.search.toLowerCase());
            }));
            console.log(response);
        }).catch(err => console.error(err));
        setLoading(false);
    },[props]);

    return (
        <div className="row mx-2">
            {
                cards?.map((element) => {
                    return(
                        <div className="col-4 my-3 d-flex justify-content-center align-items-center" key={element.id}>
                            <MyCard title={element.title} genre={element.genre} loading={loading} url={element.url} id={element.id} platform={element.platform} thumbnail={element.thumbnail} releaseDate={element.releaseDate}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainPage
