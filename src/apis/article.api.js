import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 글 등록하기
export const writeArticle = async (writeForm) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.post(`${SERVER_URL}/article`, writeForm, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// 글 목록 가져오기
export const getArticles = async ({ pageParam, category }) => {
    const response = await axios.get(
        `${SERVER_URL}/article?category=${category}&page=${pageParam}`,
        {
            withCredentials: true,
        }
    );
    return response.data;
};

export const getArticle = async (slug) => {
    const response = await axios.get(`${SERVER_URL}/article/${slug}`, {
        withCredentials: true,
    });

    return response.data;
};

// 글 삭제
export const deleteArticle = async (slug) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.delete(`${SERVER_URL}/article/${slug}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// 글 수정
export const editArticle = async (slug, editForm) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.put(`${SERVER_URL}/article/${slug}`, editForm, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// 글 검색
export const getSearchArticles = async ({ pageParam, keyword }) => {
    const response = await axios.get(
        `${SERVER_URL}/article/search?keyword=${keyword}&page=${pageParam}`,
        {
            withCredentials: true,
        }
    );
    return response.data;
};
