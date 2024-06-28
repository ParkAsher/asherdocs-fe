import axios from 'axios';

// 이메일 중복확인
const checkEmailDuplicated = async ({ email }) => {
    const response = await axios.post(
        `http://localhost:5000/user/email/check`,
        { email },
        {
            withCredentials: true,
        }
    );

    console.log(response.data);
    return response.data;
};

// 닉네임 중복확인
const checkNicknameDuplicated = async ({ nickname }) => {
    const response = await axios.post(
        `http://localhost:5000/user/nickname/check`,
        { nickname },
        {
            withCredentials: true,
        }
    );

    console.log(response.data);
    return response.data;
};

export { checkEmailDuplicated, checkNicknameDuplicated };
