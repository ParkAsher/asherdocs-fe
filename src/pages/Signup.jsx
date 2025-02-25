import React from 'react';
import SignupForm from '../components/signup/SignupForm';
import Meta from '../components/meta/Meta';

function Signup() {
    return (
        <>
            <Meta
                title='회원가입 | ASHERDOCS'
                description='Asher 블로그 회원가입 페이지'
                keywords='Asher, AsherDocs, 개발, 개발자, 블로그, 회원가입'
                imgSrc='/logo.png'
                url='https://asherdocs.com/signup'
                type='website'
            />
            <SignupForm />
        </>
    );
}

export default Signup;
