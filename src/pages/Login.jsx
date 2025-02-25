import React from 'react';
import LoginForm from '../components/login/LoginForm';
import Meta from '../components/meta/Meta';

function Login() {
    return (
        <>
            <Meta
                title='로그인 | MINSSEUG'
                description='민쓱 블로그 로그인 페이지'
                keywords='민쓱, minsseug, 개발, 개발자, 블로그, 로그인'
                imgSrc='/logo.png'
                url='https://asherdocs.com/login'
                type='website'
            />
            <LoginForm />
        </>
    );
}

export default Login;
