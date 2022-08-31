import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const ShortenedLink = ({ shortLink }) => {
    return (
        <>
            <p>{shortLink}</p>
            <CopyToClipboard text={shortLink}>
                <button>Copy URL to Clipboard</button>
            </CopyToClipboard>
        </>
    );
};

export default ShortenedLink;
