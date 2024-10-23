import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useHandleAuthError } from '../../utils/errorHandlers';
import { writeComment } from '../../apis/comment.api';
import { useNavigate } from 'react-router-dom';
// 댓글 작성
export const useCommentWriteMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleAuthError = useHandleAuthError();

    return useMutation({
        mutationFn: writeComment,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['comments']);
            navigate(0);
        },
        onError: handleAuthError,
    });
};
