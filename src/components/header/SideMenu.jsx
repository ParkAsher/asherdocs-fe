import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SideMenu({ nickname, isLoggedIn, handler, logout }) {
    const navigate = useNavigate();

    const navigateLoginButtonClickHandler = () => {
        handler();
        navigate('/login');
    };

    const navigateSignUpButtonClickHandler = () => {
        handler();
        navigate('/signup');
    };

    const navigateWriteButtonClickHandler = () => {
        handler();
        navigate('/write');
    };

    return (
        <div className='fixed top-0 right-0 w-1/3 h-screen z-20 bg-white sm:w-full'>
            <div className='h-[4rem] px-2 flex justify-between items-center border-b border-solid border-gray-300'>
                {isLoggedIn ? (
                    <div className='font-bold'>
                        <p>{nickname} 님 안녕하세요!</p>
                    </div>
                ) : (
                    <div></div>
                )}
                <div onClick={handler} className='cursor-pointer'>
                    <IoClose size='32' />
                </div>
            </div>
            {isLoggedIn ? (
                <div className='text-base'>
                    <div
                        onClick={navigateWriteButtonClickHandler}
                        className='w-full h-[3rem] px-2 flex items-center border-b border-solid border-gray-300'
                    >
                        글쓰기
                    </div>
                    <div
                        onClick={logout}
                        className='w-full h-[3rem] px-2 flex items-center border-b border-solid border-gray-300'
                    >
                        로그아웃
                    </div>
                </div>
            ) : (
                <div className='text-lg'>
                    <div
                        onClick={navigateLoginButtonClickHandler}
                        className='w-full h-[3rem] px-2 flex items-center border-b border-solid border-gray-300'
                    >
                        로그인
                    </div>
                    <div
                        onClick={navigateSignUpButtonClickHandler}
                        className='w-full h-[3rem] px-2 flex items-center border-b border-solid border-gray-300'
                    >
                        회원가입
                    </div>
                </div>
            )}
        </div>
    );
}

export default SideMenu;
