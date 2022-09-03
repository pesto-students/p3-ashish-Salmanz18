import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '@mui/material/Button';

const ShortenedLink = ({ shortLink }) => {
    return (
        <div>
            {!shortLink ? (
                <p>Enter your URL above to get your Shortified URL</p>
            ) : (
                <p>This is your Shortified Link : {shortLink} </p>
            )}
            <CopyToClipboard text={shortLink}>
                <Button
                    size='small'
                    justifycontent='center'
                    variant='contained'
                    color='success'>
                    Copy URL to Clipboard
                </Button>
            </CopyToClipboard>
        </div>
    );
};

export default ShortenedLink;
