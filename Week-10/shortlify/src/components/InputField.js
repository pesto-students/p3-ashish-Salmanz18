import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const submitButton = {
    marginLeft: 1,
};

const InputField = ({ createShortUrl }) => {
    const [inputUrl, setInputUrl] = useState('');
    return (
        <>
            <TextField
                size='small'
                id='outlined-basic'
                label='URL'
                variant='outlined'
                value={inputUrl}
                onChange={(e) => {
                    setInputUrl(e.target.value);
                }}
            />
            <Button
                sx={submitButton}
                size='medium'
                variant='contained'
                onClick={() => {
                    createShortUrl(inputUrl);
                    setInputUrl('');
                }}>
                Shorten URL
            </Button>
        </>
    );
};

export default InputField;
