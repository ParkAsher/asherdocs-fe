import React from 'react';
import styled from 'styled-components';
import logoImage from '../../images/logo.png';
import Link from '../common/Link';

function HeaderLogo() {
    return (
        <HeaderLogoBlock>
            <HeaderLogoTitleBlock>
                <Link to='/'>AsherDocs</Link>
            </HeaderLogoTitleBlock>
        </HeaderLogoBlock>
    );
}

const HeaderLogoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderLogoTitleBlock = styled.div`
    height: 100%;
    margin-left: 1rem;
    font-size: 1.25rem;
    font-family: 'Playwrite IS', cursive;
    font-weight: bold;
`;

export default HeaderLogo;
