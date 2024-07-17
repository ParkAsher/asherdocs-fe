import oc from 'open-color';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import useInputs from '../../hooks/useInputs';
import { useLoginMutation } from '../../hooks/queries/user.query';
import useUserStore from '../../zustand/userStore';

function LoginForm() {
    const [values, handler, resetValue] = useInputs({
        email: '',
        password: '',
    });

    const emailRef = useRef();
    const passwordRef = useRef();

    const setLoggedIn = useUserStore((state) => state.setLoggedIn);

    // 로그인 성공
    const loginSuccessCallback = (data) => {
        const { accessToken, nickname, id, role } = data;

        setLoggedIn(accessToken, nickname, id, role);

        window.location.href = '/';
    };

    // 로그인 실패
    const loginErrorCallback = (error) => {
        resetValue('password');
        passwordRef.current.focus();
        return;
    };

    const {
        mutate: loginMutate,
        isError,
        error,
    } = useLoginMutation(loginSuccessCallback, loginErrorCallback);

    const handleLoginButtonClick = (e) => {
        e.preventDefault();

        if (!values.email) {
            alert('이메일을 입력해주세요.');
            emailRef.current.focus();
            return;
        }

        if (!values.password) {
            alert('비밀번호를 입력해주세요.');
            passwordRef.current.focus();
            return;
        }

        const userForm = values;

        loginMutate(userForm);
    };

    return (
        <LoginBlock>
            <LoginFormBlock>
                <LoginFormHeader>
                    <span>로그인</span>
                </LoginFormHeader>
                <LoginInputForm>
                    <LoginInput
                        ref={emailRef}
                        type='text'
                        placeholder='이메일'
                        name='email'
                        value={values.email}
                        onChange={handler}
                    ></LoginInput>
                    <LoginInput
                        ref={passwordRef}
                        type='password'
                        placeholder='비밀번호'
                        name='password'
                        value={values.password}
                        onChange={handler}
                    ></LoginInput>
                    {isError ? (
                        <span style={{ color: 'red' }}>{error.response.data.response}</span>
                    ) : (
                        <span></span>
                    )}
                    <Button onClick={handleLoginButtonClick} $colorname='indigo' $colornumber='7'>
                        로그인
                    </Button>
                </LoginInputForm>
            </LoginFormBlock>
        </LoginBlock>
    );
}

// TODO : AuthForm 공통 컴포넌트로.
const LoginBlock = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
    background: ${oc.gray[2]};

    display: flex;
    justify-content: center;
    align-items: center;
`;

// TODO : AuthFormBlcok 공통 컴포넌트로.
const LoginFormBlock = styled.div`
    width: 400px;
    background: #ffffff;
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`;

// TODO : AuthFormHeader 공통 컴포넌트로.
const LoginFormHeader = styled.div`
    text-align: center;

    span {
        font-weight: bold;
        font-size: 2rem;
    }
`;

const LoginInputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    span {
        font-weight: bold;
        text-align: center;
        font-size: 0.825rem;
    }
`;

// TODO : AuthInput 공통 컴포넌트로.
const LoginInput = styled.input`
    width: 100%;
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

export default LoginForm;
