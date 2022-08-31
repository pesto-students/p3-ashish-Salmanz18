import './App.css';
import { useState } from 'react';
import InputField from './components/InputField';
import ShortenedLink from './components/ShortenedLink';

const url = 'https://api.shrtco.de/v2/shorten?';

export const fetchUrl = async (inputUrl) => {
    const res = await fetch(url + `url=${inputUrl}`);
    const data = await res.json();
    console.log(data);
    return data;
};

export const App = () => {
    const [shortLink, setShortLink] = useState('');
    const createShortUrl = async (inputUrl) => {
        const res = await fetchUrl(inputUrl);
        setShortLink(res.result.full_short_link);
    };
    return (
        <div className='App'>
            <h1>Shortify your URL</h1>
            <InputField createShortUrl={createShortUrl} />
            <hr />
            <ShortenedLink shortLink={shortLink} />
        </div>
    );
};
