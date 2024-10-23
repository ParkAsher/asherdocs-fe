import React from 'react';
import { formatDate } from './../../utils/date';
import useUserStore from '../../zustand/userStore';
import { useCommentDeleteMutation } from '../../hooks/queries/comment.query';

const CommentItem = React.forwardRef((props, ref) => {
    const { isLoggedIn, id } = useUserStore((state) => state);

    const articleId = props.articleId;
    const { id: commentId, comment, createdAt, user } = props.comment;
    const { id: userId, nickname } = user;

    const { mutate: commentDeleteMutation } = useCommentDeleteMutation(commentId, articleId);

    const commentDeleteOnClickHandler = () => {
        const check = window.confirm('삭제 하시겠습니까?');

        if (!check) return;

        commentDeleteMutation();
    };

    return (
        <div className='w-full py-6 border-b border-solid border-gray-300'>
            <div className='flex justify-between items-align mb-4'>
                <div className=''>
                    <div className='text-lg font-bold sm:text-base'>{nickname}</div>
                    <div className='text-sm text-gray-400 sm:text-xs'>{formatDate(createdAt)}</div>
                </div>
                {isLoggedIn && id === userId ? (
                    <div className='flex items-align justify-between flex-wrap gap-2 cursor-pointer text-gray-400 sm:text-sm'>
                        <div>수정</div>
                        <div onClick={commentDeleteOnClickHandler}>삭제</div>
                    </div>
                ) : null}
            </div>
            <div className='text-lg sm:text-sm'>
                <div className='break-words break-keep'>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
});

export default CommentItem;
