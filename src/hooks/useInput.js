import { useState } from 'react';

const useInput = () => {
    // State
    const [value, setValue] = useState('');

    // Handler
    const handler = (e) => {
        setValue(e.target.value);
    };

    return [value, handler];
};

export default useInput;
