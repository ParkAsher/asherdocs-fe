import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import Button from '../common/Button';

function Header() {
    return (
        <HeaderBlock>
            <HeaderInnerBlock>
                <HeaderLogo />
                <HeaderRight>
                    <Button to='/signup' colorname='indigo' colornumber='3'>
                        회원가입
                    </Button>
                    <Button to='/login' colorname='indigo' colornumber='7'>
                        로그인
                    </Button>
                </HeaderRight>
            </HeaderInnerBlock>
        </HeaderBlock>
    );
}

const HeaderBlock = styled.div`
    width: 100%;
    height: 4rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);
`;

const HeaderInnerBlock = styled.div`
    width: 1700px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
`;

export default Header;
