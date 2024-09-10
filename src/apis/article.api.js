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

// 글 목록 가져오기
const getArticles = async ({ pageParam, category }) => {
    const response = await axios.get(
        `${SERVER_URL}/article?category=${category}&page=${pageParam}`,
        {
            withCredentials: true,
        }
    );
    return response.data;
};

const getArticle = async (id) => {
    const response = await axios.get(`${SERVER_URL}/article/${id}`, {
        withCredentials: true,
    });

    return response.data;
};

export { writeArticle, getArticles, getArticle };
