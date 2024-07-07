import { useState } from 'react';

const useInputs = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handler = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    // 하나의 value reset
    const resetValue = (name) => {
        setValues({
            ...values,
            [name]: initialState[name],
        });
    };

    return [values, handler, resetValue];
};

export default useInputs;
