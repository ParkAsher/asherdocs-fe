import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 글 등록하기
const writeArticle = async (writeForm) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.post(`${SERVER_URL}/article`, writeForm, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export { writeArticle };
