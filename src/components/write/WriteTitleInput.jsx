import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

function WriteTitleInput({ handler, value }) {
    const handleChange = (e) => {
        handler(e);
    };

    return (
        <TitleInput
            type='text'
            name='title'
            onChange={handleChange}
            placeholder='제목을 입력하세요.'
            value={value}
        />
    );
}

const TitleInput = styled.input`
    width: 100%;
    padding: 1rem;
    outline: none;
    font-size: 1.125rem;
    margin-bottom: 3rem;
    border-radius: 5px;
    border: 1px solid ${oc.gray[6]};

    &::placeholder {
        color: ${oc.gray[5]};
    }
`;

export default WriteTitleInput;
