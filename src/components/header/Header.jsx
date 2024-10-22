import React from 'react';
import styled from 'styled-components';
import useUserStore from '../../zustand/userStore';
import Link from '../common/Link';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { isLoggedIn, nickname, role, setLoggedOut } = useUserStore((state) => state);

    const navigate = useNavigate();

    const logOut = () => {
        setLoggedOut();

        window.location.reload();
    };

    const navigateLoginButtonClickHandler = () => {
        navigate('/login');
    };

    const navigateSignUpButtonClickHandler = () => {
        navigate('/signup');
    };

    const navigateWriteButtonClickHandler = () => {
        navigate('/write');
    };

    return (
        <div className='w-full h-[4rem] bg-white border-b border-solid border-gray-300'>
            <div className='flex items-center justify-between h-full px-3 mx-auto my-0 w-[1700px] xxl:w-[1300px] xl:w-[1024px] lg:w-full'>
                <div className='flex items-center h-full text-2xl font-bold'>
                    <Link to='/'>AsherDocs</Link>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    {isLoggedIn ? (
                        <>
                            {role === 1 ? (
                                <button
                                    onClick={navigateWriteButtonClickHandler}
                                    className='px-3 py-2 font-bold border border-box border-solid border-gray-800 rounded-md'
                                >
                                    글쓰기
                                </button>
                            ) : null}
                            <button
                                onClick={logOut}
                                className='px-3 py-2 font-bold text-white border border-box border-solid border-gray-800 bg-gray-800 rounded-md'
                            >
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={navigateLoginButtonClickHandler}
                                className='px-3 py-2 font-bold border border-box border-solid border-gray-800 rounded-md'
                            >
                                로그인
                            </button>
                            <button
                                onClick={navigateSignUpButtonClickHandler}
                                className='px-3 py-2 font-bold text-white border border-box border-solid border-gray-800 bg-gray-800 rounded-md'
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

    // return (
    //     <HeaderBlock>
    //         <HeaderInnerBlock>
    //             <HeaderLogo />
    //             <HeaderRight>
    //                 {isLoggedIn ? (
    //                     <>
    //                         <span>{nickname}</span>
    //                         {role === 1 ? (
    //                             <Button to='/write' $colorname='gray' $colornumber='6'>
    //                                 글쓰기
    //                             </Button>
    //                         ) : null}
    //                         <Button onClick={logOut}>로그아웃</Button>
    //                     </>
    //                 ) : (
    //                     <>
    //                         <Button to='/signup' $colorname='indigo' $colornumber='3'>
    //                             회원가입
    //                         </Button>
    //                         <Button to='/login' $colorname='indigo' $colornumber='7'>
    //                             로그인
    //                         </Button>
    //                     </>
    //                 )}
    //             </HeaderRight>
    //         </HeaderInnerBlock>
    //     </HeaderBlock>
    // );
}

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
