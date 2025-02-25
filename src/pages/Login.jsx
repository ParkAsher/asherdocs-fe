import React from 'react';
import LoginForm from '../components/login/LoginForm';
import Meta from '../components/meta/Meta';

function Login() {
    return (
        <>
            <Meta
                title='로그인 | ASHERDOCS'
                description='Asher 블로그 로그인 페이지'
                keywords='Asher, AsherDocs, 개발, 개발자, 블로그, 로그인'
                imgSrc='/logo.png'
                url='https://asherdocs.com/login'
                type='website'
            />
            <LoginForm />
        </>
    );
}

export default Login;
