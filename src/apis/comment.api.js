import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 댓글 작성
export const writeComment = async (commentForm) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.post(`${SERVER_URL}/comment`, commentForm, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// 댓글 리스트 가져오기
export const getComments = async ({ pageParam, articleId }) => {
    const response = await axios.get(`${SERVER_URL}/comment/${articleId}?page=${pageParam}`);

    return response.data;
};
