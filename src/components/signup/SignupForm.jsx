import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from './../common/Button';
import useInput from './../../hooks/useInput';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [isCheckedPassword, setIsCheckedPassword] = useState(false);

    const [nickname, setNickname] = useState('');
    const [isValidNickname, setIsValidNickname] = useState(false);

    const onChangeEmailHandler = (e) => {
        const { value } = e.target;
        setEmail(value);

        const regExp =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

        if (regExp.test(value)) {
            // true
            setIsValidEmail(true);
        } else {
            // false
            setIsValidEmail(false);
        }
    };

    const onChangePasswordHandler = (e) => {
        const { value } = e.target;
        setPassword(value);

        if (value.length >= 8 && value.length <= 12) {
            setIsValidPassword(true);
        } else {
            setIsValidPassword(false);
        }
    };

    const onChangePasswordCheckHandler = (e) => {
        const { value } = e.target;
        setPasswordCheck(value);

        if (password === value) {
            setIsCheckedPassword(true);
        } else {
            setIsCheckedPassword(false);
        }
    };

    const onChangeNicknameHandler = (e) => {
        const { value } = e.target;
        setNickname(value);

        if (value.length >= 2 && value.length <= 15) {
            setIsValidNickname(true);
        } else {
            setIsValidNickname(false);
        }
    };

    return (
        <SignupBlock>
            <SignupFormBlock>
                <SignupFormHeader>
                    <span>회원가입</span>
                </SignupFormHeader>
                <SignupInputForm>
                    <p>이메일</p>
                    <div>
                        <SignupInput
                            placeholder='aaaa@naver.com'
                            type='text'
                            value={email}
                            onChange={onChangeEmailHandler}
                        ></SignupInput>
                        <Button>중복확인</Button>
                        {email === '' ? (
                            <span></span>
                        ) : isValidEmail ? (
                            <span></span>
                        ) : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                    <p>비밀번호</p>
                    <div>
                        <SignupInput
                            placeholder='8~12자'
                            type='password'
                            value={password}
                            onChange={onChangePasswordHandler}
                        ></SignupInput>
                        {password === '' ? (
                            <span></span>
                        ) : isValidPassword ? (
                            <span></span>
                        ) : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                    <p>비밀번호 확인</p>
                    <div>
                        <SignupInput
                            placeholder='비밀번호 확인'
                            type='password'
                            value={passwordCheck}
                            onChange={onChangePasswordCheckHandler}
                        ></SignupInput>
                        {passwordCheck === '' ? (
                            <span></span>
                        ) : isCheckedPassword ? (
                            <span style={{ color: 'blue' }}>비밀번호가 일치합니다.</span>
                        ) : (
                            <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
                        )}
                    </div>
                    <p>닉네임</p>
                    <div>
                        <SignupInput
                            placeholder='2~15자'
                            type='text'
                            value={nickname}
                            onChange={onChangeNicknameHandler}
                        ></SignupInput>
                        <Button>중복확인</Button>
                        {nickname === '' ? (
                            <span></span>
                        ) : isValidNickname ? (
                            <span></span>
                        ) : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                </SignupInputForm>
            </SignupFormBlock>
        </SignupBlock>
    );
}

const SignupBlock = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
    background: ${oc.gray[2]};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignupFormBlock = styled.div`
    width: 380px;
    background: #ffffff;
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SignupFormHeader = styled.div`
    text-align: center;

    span {
        font-weight: bold;
        font-size: 2rem;
    }
`;

const SignupInputForm = styled.form`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;

        span {
            font-size: 0.825rem;
        }
    }

    p {
        font-weight: bold;
        margin: 0 0 0.25rem 0;
    }
`;

const SignupInput = styled.input`
    width: 70%;
    border: none;
    border-bottom: 1px solid ${oc.gray[8]};
    padding: 1rem 0;
    outline: none;
    font-size: 1rem;

    &:focus {
        border-bottom: 1px solid ${oc.indigo[5]};
    }

    &::placeholder {
        color: ${oc.gray[5]};
    }
`;

export default SignupForm;
