import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from './../common/Button';
import { useDuplicatedCheckMutation } from '../../hooks/queries/user.query';

function SignupForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordCheckRef = useRef();
    const nicknameRef = useRef();

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

    const DuplicatedCheckSuccessCallback = (type, data, variables, context) => {
        if (type === 'email') {
            alert('사용 가능한 이메일입니다.');
            setIsDuplicateEmail(true);
            return;
        }

        if (type === 'nickname') {
            alert('사용 가능한 닉네임입니다.');
            setIsDuplicateNickname(true);
            return;
        }
    };

    const DuplicatedCheckErrorCallback = (type, error, variable, context) => {
        const { status } = error.response;

        if (status === 409) {
            if (type === 'email') {
                setEmail('');
                alert('이미 사용중인 이메일입니다.');
                return;
            }
            if (type === 'nickname') {
                setNickname('');
                alert('이미 사용중인 닉네임입니다.');
                return;
            }
        }

        alert('다시 시도해주세요.');
        return;
    };

    const { mutate: emailMutate } = useDuplicatedCheckMutation(
        'email',
        DuplicatedCheckSuccessCallback,
        DuplicatedCheckErrorCallback
    );

    const { mutate: nicknameMutate } = useDuplicatedCheckMutation(
        'nickname',
        DuplicatedCheckSuccessCallback,
        DuplicatedCheckErrorCallback
    );

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

        emailMutate({ email });
    };

    // 닉네임 중복 검사
    const handleNicknameDuplicateCheck = (e) => {
        e.preventDefault();

        if (!isValidNickname) {
            setNickname('');
            return alert('형식에 맞게 입력해주세요.');
        }

        if (!nickname) return alert('닉네임을 입력해주세요.');

        nicknameMutate({ nickname });
    };

    // 회원가입
    const handleSignupButtonClick = (e) => {
        e.preventDefault();

        if (!email) {
            alert('이메일을 입력해주세요.');
            emailRef.current.focus();
            return;
        }

        if (!isValidEmail) {
            alert('올바른 이메일을 입력해주세요.');
            emailRef.current.focus();
            return;
        }

        if (!password) {
            alert('비밀번호를 입력해주세요.');
            passwordRef.current.focus();
            return;
        }

        if (!isValidPassword) {
            alert('올바른 비밀번호를 입력해주세요');
            passwordRef.current.focus();
            return;
        }

        if (!passwordCheck) {
            alert('비밀번호 확인을 입력해주세요.');
            passwordCheckRef.current.focus();
            return;
        }

        if (!isCheckedPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            passwordCheckRef.current.focus();
            return;
        }

        if (!nickname) {
            alert('닉네임을 입력해주세요.');
            nicknameRef.current.focus();
            return;
        }

        if (!isValidNickname) {
            alert('올바른 닉네임을 입력해주세요.');
            nicknameRef.current.focus();
            return;
        }

        if (!isDuplicateEmail) {
            alert('이메일 중복확인을 해주세요.');
            emailRef.current.focus();
            return;
        }

        if (!isDuplicateNickname) {
            alert('닉네임 중복확인을 해주세요.');
            nicknameRef.current.focus();
            return;
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
                            ref={emailRef}
                            placeholder='aaaa@naver.com'
                            type='text'
                            value={email}
                            onChange={onChangeEmailHandler}
                        ></SignupInput>
                        <Button onClick={handleEmailDuplicateCheck}>중복확인</Button>
                        {email === '' ? null : isValidEmail ? (
                            <span></span>
                        ) : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                    <p>비밀번호</p>
                    <div>
                        <SignupInput
                            ref={passwordRef}
                            placeholder='8~12자'
                            type='password'
                            value={password}
                            onChange={onChangePasswordHandler}
                        ></SignupInput>
                        {password === '' ? null : isValidPassword ? null : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                    <p>비밀번호 확인</p>
                    <div>
                        <SignupInput
                            ref={passwordCheckRef}
                            placeholder='비밀번호 확인'
                            type='password'
                            value={passwordCheck}
                            onChange={onChangePasswordCheckHandler}
                        ></SignupInput>
                        {passwordCheck === '' ? null : isCheckedPassword ? (
                            <span style={{ color: 'blue' }}>비밀번호가 일치합니다.</span>
                        ) : (
                            <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
                        )}
                    </div>
                    <p>닉네임</p>
                    <div>
                        <SignupInput
                            ref={nicknameRef}
                            placeholder='2~15자'
                            type='text'
                            value={nickname}
                            onChange={onChangeNicknameHandler}
                        ></SignupInput>
                        <Button onClick={handleNicknameDuplicateCheck}>중복확인</Button>
                        {nickname === '' ? null : isValidNickname ? null : (
                            <span style={{ color: 'red' }}>형식이 올바르지 않습니다.</span>
                        )}
                    </div>
                    <div style={{ justifyContent: 'flex-end' }}>
                        <Button
                            onClick={handleSignupButtonClick}
                            $colorname='cyan'
                            $colornumber='4'
                        >
                            가입하기
                        </Button>
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
    gap: 2rem;
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
        margin-bottom: 2rem;

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
