import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteArticle, editArticle, writeArticle } from '../../apis/article.api';
import { useNavigate } from 'react-router-dom';
import { useHandleAuthError } from '../../utils/errorHandlers';

// 글 등록하기
export const useWriteMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: writeArticle,
        onSuccess: (data) => {
            alert('글을 등록했습니다.');
            queryClient.invalidateQueries(['categories']);
            queryClient.invalidateQueries(['articles']);

            navigate('/');
        },
        onError: handleAuthError,
    });
};

// 글 삭제
export const useDeleteMutation = (slug) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: () => deleteArticle(slug),
        onSuccess: (data) => {
            alert('글을 삭제했습니다.');
            queryClient.invalidateQueries(['categories']);
            queryClient.invalidateQueries(['articles']);
            queryClient.invalidateQueries(['article', slug]);

            navigate('/');
        },
        onError: handleAuthError,
    });
};

// 글 수정
export const useEditMutation = (slug) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: (editForm) => editArticle(slug, editForm),
        onSuccess: (data) => {
            alert('글을 수정했습니다.');
            queryClient.invalidateQueries(['categories']);
            queryClient.invalidateQueries(['articles']);
            queryClient.invalidateQueries(['article', slug]);

            navigate('/');
        },
        onError: handleAuthError,
    });
};
