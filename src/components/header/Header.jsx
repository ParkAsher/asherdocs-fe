import React, { useState } from 'react';
import useUserStore from '../../zustand/userStore';
import Link from '../common/Link';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';
import { AiOutlineBell } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getHasNewNotifications } from '../../apis/notification.api';

function Header() {
    const { isLoggedIn, nickname, role, setLoggedOut } = useUserStore((state) => state);

    const { data, isLoading } = useQuery({
        queryKey: ['hasNewNotifications'],
        queryFn: getHasNewNotifications,
        enabled: !!isLoggedIn,
    });

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

    const navigateNotificationButtonClickHandler = () => {
        navigate('/notification');
    };

    const sideOpenButtonClickHandler = () => {
        setIsSideOpen(!isSideOpen);
    };

    return (
        <div className='relative w-full h-[4rem] bg-[#262626]'>
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
                <div className='flex items-center h-full text-2xl text-white font-bold lg:text-xl'>
                    <Link to='/'>MINSSEUG</Link>
                </div>
                <div className='flex items-center gap-2'>
                    {isLoggedIn && (
                        <div
                            className='relative cursor-pointer hidden md:block'
                            onClick={navigateNotificationButtonClickHandler}
                        >
                            <AiOutlineBell size='32' className='text-white' />
                            {data?.hasNewNotifications && (
                                <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
                            )}
                        </div>
                    )}
                    <div
                        onClick={sideOpenButtonClickHandler}
                        className='hidden cursor-pointer md:block'
                    >
                        <GiHamburgerMenu size='32' className='text-white' />
                    </div>
                </div>

                <div className='relative flex items-center justify-between gap-2 md:hidden'>
                    {isLoggedIn ? (
                        <>
                            <div
                                className='relative cursor-pointer'
                                onClick={navigateNotificationButtonClickHandler}
                            >
                                <AiOutlineBell size='32' className='text-white' />
                                {data?.hasNewNotifications && (
                                    <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
                                )}
                            </div>
                            {role === 1 ? (
                                <button
                                    onClick={navigateWriteButtonClickHandler}
                                    className='px-3 py-2 font-bold text-white'
                                >
                                    글쓰기
                                </button>
                            ) : null}
                            <button onClick={logOut} className='px-3 py-2 font-bold text-white'>
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={navigateLoginButtonClickHandler}
                                className='px-3 py-2 font-bold text-white'
                            >
                                로그인
                            </button>
                            <button
                                onClick={navigateSignUpButtonClickHandler}
                                className='px-3 py-2 font-bold text-white'
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
