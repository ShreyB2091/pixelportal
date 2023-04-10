import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import MainPage from './components/MainPage';
import { useState } from 'react';

const App = () => {

    const [platform,setPlatform] = useState('all');
    const [substr, setSubstr] = useState('');

    const handlePlatform = (plt) => {
        setPlatform(plt);
    }

    const handleSearch = (str) => {
        setSubstr(str);
    }

    return (
        <div className="App">
            <MyNavbar/>
            <Header onPlatformChange={handlePlatform} onSearchStr={handleSearch}/>
            <BrowserRouter>
				<Routes>
                    <Route path="/" element={<MainPage platform={platform} search={substr}/>}/>
				</Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
