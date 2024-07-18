import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 카테고리 가져오기
const getCategories = async () => {
    const response = await axios.get(`${SERVER_URL}/category`, { withCredentials: true });

    return response.data;
};

export { getCategories };
