import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from './../common/Button';
import { useMutation } from '@tanstack/react-query';
import { checkEmailDuplicated, checkNicknameDuplicated } from '../../apis/user.api';

function SignupForm() {
    const emailMutation = useMutation({
        mutationFn: checkEmailDuplicated,
        onSuccess: (data, variables, context) => {
            alert('사용 가능한 이메일입니다.');

            setIsDuplicateEmail(true);
        },
        onError: (error, variables, context) => {
            setEmail('');
            const { status } = error.response;

            switch (status) {
                case 409:
                    console.log('닉네임 중복');
                    alert('이미 사용중인 닉네임입니다.');
                    break;

                default:
                    alert('다시 시도해주세요.');
                    break;
            }
        },
    });

    const nicknameMutation = useMutation({
        mutationFn: checkNicknameDuplicated,
        onSuccess: (data, variables, context) => {
            alert('사용 가능한 닉네임입니다.');

            setIsDuplicateNickname(true);
        },
        onError: (error, variables, context) => {
            setNickname('');
            const { status } = error.response;

            switch (status) {
                case 409:
                    console.log('닉네임 중복');
                    alert('이미 사용중인 닉네임입니다.');
                    break;

                default:
                    alert('다시 시도해주세요.');
                    break;
            }
        },
    });

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [isCheckedPassword, setIsCheckedPassword] = useState(false);

    const [nickname, setNickname] = useState('');
    const [isValidNickname, setIsValidNickname] = useState(false);
    const [isDuplicateNickname, setIsDuplicateNickname] = useState(false);

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

    // 이메일 중복 검사
    const handleEmailDuplicateCheck = (e) => {
        e.preventDefault();

        if (!isValidEmail) {
            setEmail('');
            return alert('형식에 맞게 입력해주세요.');
        }

        if (!email) return alert('이메일을 입력해주세요.');

        emailMutation.mutate({ email });
    };

    // 닉네임 중복 검사
    const handleNicknameDuplicateCheck = (e) => {
        e.preventDefault();

        if (!isValidNickname) {
            setNickname('');
            return alert('형식에 맞게 입력해주세요.');
        }

        if (!nickname) return alert('닉네임을 입력해주세요.');

        nicknameMutation.mutate({ nickname });
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
                        <Button onClick={handleEmailDuplicateCheck}>중복확인</Button>
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
                        <Button onClick={handleNicknameDuplicateCheck}>중복확인</Button>
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
