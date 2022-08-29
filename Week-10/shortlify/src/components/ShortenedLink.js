import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function ShortenedLink() {
    const [shortLink, setShortLink] = useState('');
    return (
        <CopyToClipboard text={shortLink}>
            <button>Copy URL to Clipboard</button>
        </CopyToClipboard>
    );
}

export default ShortenedLink;
