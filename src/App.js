import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import MainPage from './components/MainPage';
import { useState } from 'react';

const App = () => {

    const[platform,setPlatform] = useState('a');

    const handlePlatform = (plt) => {
        setPlatform(plt);
    }

    return (
        <div className="App">
            <MyNavbar/>
            <Header onPlatformChange={handlePlatform}/>
            <BrowserRouter>
				<Routes>
                    <Route path="/" element={<MainPage platform={platform}/>}/>
				</Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
