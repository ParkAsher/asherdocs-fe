import { useMutation, useQueryClient } from '@tanstack/react-query';
import { writeArticle } from '../../apis/article.api';
import useUserStore from '../../zustand/userStore';
import { useNavigate } from 'react-router-dom';

// 글 등록하기
const useWriteMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const setLoggedOut = useUserStore((state) => state.setLoggedOut);

    return useMutation({
        mutationFn: writeArticle,
        onSuccess: (data) => {
            alert('글을 등록했습니다.');
            queryClient.invalidateQueries(['categories']);
            queryClient.invalidateQueries(['articles']);

            navigate('/');
        },
        onError: (error) => {
            const { status } = error.response;

            if (status === 401) {
                alert('유효하지 않은 토큰입니다. 다시 로그인해 주세요.');
                setLoggedOut();
                navigate('/login');
            } else {
                alert('다시 시도해 주세요.');
            }
        },
    });
};

export { useWriteMutation };
