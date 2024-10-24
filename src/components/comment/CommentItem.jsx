import React, { useState } from 'react';
import { formatDate } from './../../utils/date';
import useUserStore from '../../zustand/userStore';
import {
    useCommentDeleteMutation,
    useCommentEditMutation,
} from '../../hooks/queries/comment.query';

const CommentItem = React.forwardRef((props, ref) => {
    const { isLoggedIn, id } = useUserStore((state) => state);

    const articleId = props.articleId;
    const { id: commentId, comment, createdAt, user } = props.comment;
    const { id: userId, nickname } = user;

    const [isEdit, setIsEdit] = useState(false);
    const [editComment, setEditComment] = useState(comment);

    const commentEditFormOpenHandler = () => {
        setIsEdit(!isEdit);
    };

    const commentChangeHandler = (e) => {
        setEditComment(e.target.value);
    };

    const { mutate: commentDeleteMutation } = useCommentDeleteMutation(commentId, articleId);

    const { mutate: commentEditMutation } = useCommentEditMutation(commentId, articleId);

    const commentDeleteOnClickHandler = () => {
        const check = window.confirm('삭제 하시겠습니까?');

        if (!check) return;

        commentDeleteMutation();
    };

    const commentEditOnclickHandler = () => {
        if (!editComment) {
            console.log('댓글을 입력해주세요.');
            return;
        }

        const editForm = {
            comment: editComment,
        };

        commentEditMutation(editForm);
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
                        {!isEdit ? <div onClick={commentEditFormOpenHandler}>수정</div> : null}
                        <div onClick={commentDeleteOnClickHandler}>삭제</div>
                    </div>
                ) : null}
            </div>
            {!isEdit ? (
                <div className='text-lg sm:text-sm'>
                    <div className='break-words break-keep'>
                        <p>{comment}</p>
                    </div>
                </div>
            ) : (
                <div className='w-full pb-8'>
                    <textarea
                        onChange={commentChangeHandler}
                        value={editComment}
                        className='w-full h-[80px] px-2 py-3 mb-4 border border-solid border-gray-300 rounded-sm resize-none outline-none'
                        placeholder='댓글을 작성하세요'
                    ></textarea>
                    <div className='flex justify-end flex-wrap gap-2'>
                        <button
                            onClick={commentEditFormOpenHandler}
                            className='px-3 py-2 font-bold border border-solid border-blue-500 rounded-md text-blue-500'
                        >
                            취소
                        </button>
                        <button
                            onClick={commentEditOnclickHandler}
                            className='px-3 py-2 font-bold border border-solid border-blue-500 bg-blue-500 rounded-md text-white'
                        >
                            댓글 수정
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

export default CommentItem;
