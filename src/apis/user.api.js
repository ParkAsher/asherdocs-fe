import axios from 'axios';

// 이메일 중복확인
const checkEmailDuplicated = async ({ email }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/email/check`,
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
        `${process.env.REACT_APP_SERVER_URL}/user/nickname/check`,
        { nickname },
        {
            withCredentials: true,
        }
    );

    return response.data;
};

// 회원가입
const signUp = async (useForm) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, useForm, {
        withCredentials: true,
    });

    return response.data;
};

export { checkEmailDuplicated, checkNicknameDuplicated, signUp };
