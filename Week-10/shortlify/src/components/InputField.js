import React, { useState } from 'react';

function InputField() {
    const [input, setInput] = useState('');
    return (
        <>
            <input
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button>Submit URL</button>
        </>
    );
}

export default InputField;
