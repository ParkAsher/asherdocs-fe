import React from 'react';
import styled from 'styled-components';

function Link({ to, children }) {
    const url = `${to}`;

    return <StyledLink href={url}>{children}</StyledLink>;
}

const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export default Link;
