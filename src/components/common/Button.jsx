import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

function Button(props) {
    return props.to ? (
        <StyledLinkButton {...props}>{props.children}</StyledLinkButton>
    ) : (
        <StyledButton {...props}>{props.children}</StyledButton>
    );
}

const buttonCss = css`
    border: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    outline: none;
    cursor: pointer;

    background: ${(props) => {
        switch (props.colorname) {
            case 'gray':
                return oc.gray[props.colornumber];
            case 'violet':
                return oc.violet[props.colornumber];
            case 'indigo':
                return oc.indigo[props.colornumber];
            default:
                return oc.gray[8];
        }
    }};

    color: ${(props) => (parseInt(props.colornumber) < 3 ? 'black' : 'white')};
`;

const StyledButton = styled.button`
    ${buttonCss}
`;

const StyledLinkButton = styled(Link)`
    ${buttonCss}
`;

export default Button;
