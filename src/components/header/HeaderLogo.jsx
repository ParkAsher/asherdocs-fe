import React from 'react';
import styled from 'styled-components';
import logoImage from '../../images/logo.png';
import Link from '../common/Link';

function HeaderLogo() {
    return (
        <HeaderLogoBlock>
            <HeaderLogoImgBlock>
                <LogoImg src={logoImage} />
            </HeaderLogoImgBlock>
            <HeaderLogoTitleBlock>
                <Link href='/'>AsherDocs</Link>
            </HeaderLogoTitleBlock>
        </HeaderLogoBlock>
    );
}

const HeaderLogoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderLogoImgBlock = styled.div`
    width: 2.5rem;
    height: 2.5rem;
`;

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

const HeaderLogoTitleBlock = styled.div`
    height: 100%;
    margin-left: 1rem;
    font-size: 1.25rem;
    font-family: 'Playwrite IS', cursive;
    font-weight: bold;
`;

export default HeaderLogo;
