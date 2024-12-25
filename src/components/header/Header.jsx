import React, { useState } from 'react';
import useUserStore from '../../zustand/userStore';
import Link from '../common/Link';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';

function Header() {
    const { isLoggedIn, nickname, role, setLoggedOut } = useUserStore((state) => state);

    const [isSideOpen, setIsSideOpen] = useState(false);

    const navigate = useNavigate();

    const logOut = () => {
        setLoggedOut();

        window.location.href = '/';
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

    const sideOpenButtonClickHandler = () => {
        setIsSideOpen(!isSideOpen);
    };

    return (
        <div className='relative w-full h-[4rem] bg-white'>
            {/* Sidebar */}
            {isSideOpen ? (
                <SideMenu
                    nickname={nickname}
                    isLoggedIn={isLoggedIn}
                    handler={sideOpenButtonClickHandler}
                    logout={logOut}
                />
            ) : null}

            {/* Overlay */}
            {isSideOpen && (
                <div
                    onClick={sideOpenButtonClickHandler}
                    className='fixed inset-0 bg-gray-500 bg-opacity-5 backdrop-blur-sm z-10'
                ></div>
            )}

            {/* Header */}
            <div className='flex items-center justify-between h-full mx-auto my-0 w-[1400px] xl:px-3 xxl:w-[1300px] xl:w-[1024px] lg:w-full'>
                <div className='flex items-center h-full text-2xl font-bold lg:text-xl'>
                    <Link to='/'>AsherDocs</Link>
                </div>
                <div
                    onClick={sideOpenButtonClickHandler}
                    className='hidden cursor-pointer md:block'
                >
                    <GiHamburgerMenu size='32' />
                </div>
                <div className='flex items-center justify-between gap-2 md:hidden'>
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
}

export default Header;
