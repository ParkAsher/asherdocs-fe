import React from 'react';
import styled from 'styled-components';

function ResponsiveContainer({ children }) {
    return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
    width: 1700px;
    height: fit-content;
    margin: 0 auto;
`;

export default ResponsiveContainer;
