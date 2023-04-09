import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = (props) => {

    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        params: {platform: 'all'},
        headers: {
          platform: 'all',
          'X-RapidAPI-Key': '99cecdacffmsha1383b033df3bafp19489ejsndfbb9a1c5c93',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
    };

    const [ platforms, setPlatforms ] = useState(['all']);
    const [value, setValue] = useState(platforms[0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === "Web Browser") props.onPlatformChange("browser");
        else if(newValue === "PC (Windows)") props.onPlatformChange("pc");
        else props.onPlatformChange(newValue);
        console.log(newValue);
    };

    useEffect(() => {
        fetch('https://mmo-games.p.rapidapi.com/games?sort-by=alphabetical', options)
        .then(response => response.json())
        .then(response => {
            let pltfrms = [];
            for(const game of response) {
                if(!pltfrms.includes(game.platform)) pltfrms = [...pltfrms, game.platform];
            }
            console.log(pltfrms);
            setPlatforms([...platforms, ...pltfrms]);
        }).catch(err => console.error(err));
    }, []);

    return (
        <div className="row my-3 d-flex justify-content-center align-items-center">
            <div className="col-10" sx={{ bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="full width scrollable prevent tabs example" style={{ width: '100%' }} textColor='smokewhite'>
                    {
                        platforms?.map((item) => {
                            return (<Tab label={item} key={item} value={item}/>);
                        })
                    }
                </Tabs>
            </div>
        </div>
    );
}

export default Header;