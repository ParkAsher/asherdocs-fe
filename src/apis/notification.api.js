import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 새로운 알림이 있는지 가져오기
export const getHasNewNotifications = async () => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.get(`${SERVER_URL}/notification/new`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// 알림 목록 가져오기
export const getNotifications = async ({ pageParam }) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.get(`${SERVER_URL}/notification?page=${pageParam}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// 알림 읽음 처리
export const setNotificationRead = async (notificationId) => {
    const token = sessionStorage.getItem('token') ?? null;
    const response = await axios.patch(
        `${SERVER_URL}/notification?id=${notificationId}`,
        {},
        {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    return response.data;
};
