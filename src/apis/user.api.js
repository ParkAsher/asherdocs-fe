import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 이메일 중복확인
const checkEmailDuplicated = async ({ email }) => {
    const response = await axios.post(
        `${SERVER_URL}/user/email/check`,
        { email },
        {
            withCredentials: true,
        }
    );

    return response.data;
};

// 닉네임 중복확인
const checkNicknameDuplicated = async ({ nickname }) => {
    const response = await axios.post(
        `${SERVER_URL}/user/nickname/check`,
        { nickname },
        {
            withCredentials: true,
        }
    );

    return response.data;
};

// 회원가입
const signUp = async (userForm) => {
    const response = await axios.post(`${SERVER_URL}/user/signup`, userForm, {
        withCredentials: true,
    });

    return response.data;
};

// 로그인
const login = async (userForm) => {
    const response = await axios.post(`${SERVER_URL}/user/login`, userForm, {
        withCredentials: true,
    });

    return response.data;
};

export { checkEmailDuplicated, checkNicknameDuplicated, signUp, login };
