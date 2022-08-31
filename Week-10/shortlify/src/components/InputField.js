import { useState } from 'react';

const InputField = ({ createShortUrl }) => {
    const [inputUrl, setInputUrl] = useState('');
    return (
        <>
            <input
                value={inputUrl}
                onChange={(e) => {
                    setInputUrl(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    createShortUrl(inputUrl);
                }}>
                Submit URL
            </button>
        </>
    );
};

export default InputField;
