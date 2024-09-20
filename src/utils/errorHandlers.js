import { useNavigate } from 'react-router-dom';
import useUserStore from '../zustand/userStore';

export const useHandleAuthError = () => {
    const setLoggedOut = useUserStore((state) => state.setLoggedOut);
    const navigate = useNavigate();

    return (error) => {
        const { status } = error.response;

        if (status === 401) {
            alert('유효하지 않은 토큰입니다. 다시 로그인해 주세요.');
            setLoggedOut();
            navigate('/login');
        } else {
            alert('다시 시도해 주세요.');
        }
    };
};
