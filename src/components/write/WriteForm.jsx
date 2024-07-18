import React, { useCallback } from 'react';
import styled from 'styled-components';
import WriteCategoryInput from './WriteCategoryInput';
import useInputs from '../../hooks/useInputs';

function WriteForm() {
    const [values, handler, resetValue] = useInputs({
        category: '',
        title: '',
        content: '',
    });

    const selectOptionChangeHandler = useCallback(
        (e) => {
            handler(e);
        },
        [handler]
    );

    return (
        <WriteBlock>
            <WriteFormBlock>
                <WriteFormHeadSpan>카테고리</WriteFormHeadSpan>
                <WriteCategoryInput handler={selectOptionChangeHandler} />
            </WriteFormBlock>
        </WriteBlock>
    );
}

const WriteBlock = styled.div`
    width: 100%;
    min-height: calc(100vh - 4rem);
    // background-color: green;

    display: flex;
    justify-content: center;
`;

const WriteFormBlock = styled.div`
    width: 1700px;
    padding: 1rem 0;

    //background-color: yellow;
`;

const WriteFormHeadSpan = styled.p`
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    font-weight: bold;
`;

export default WriteForm;
