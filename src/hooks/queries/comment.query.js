import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useHandleAuthError } from '../../utils/errorHandlers';
import { deleteComment, editComment, writeComment } from '../../apis/comment.api';
import { useNavigate } from 'react-router-dom';

// 댓글 작성
export const useCommentWriteMutation = (articleId) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: writeComment,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['comments', articleId]);
            navigate(0);
        },
        onError: handleAuthError,
    });
};

// 댓글 삭제
export const useCommentDeleteMutation = (commentId, articleId) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: () => deleteComment(commentId),
        onSuccess: (data) => {
            alert('댓글을 삭제했습니다.');

            queryClient.invalidateQueries(['comments', articleId]);
            navigate(0);
        },
        onError: handleAuthError,
    });
};

// 댓글 수정
export const useCommentEditMutation = (commentId, articleId) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: (editForm) => editComment(commentId, editForm),
        onSuccess: (data) => {
            alert('댓글을 수정했습니다.');
            queryClient.invalidateQueries(['comments', articleId]);
            navigate(0);
        },
        onError: handleAuthError,
    });
};
