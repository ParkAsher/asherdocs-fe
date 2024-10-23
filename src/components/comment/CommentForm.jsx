import React, { useState } from 'react';
import { useCommentWriteMutation } from '../../hooks/queries/comment.query';
import useUserStore from '../../zustand/userStore';

function CommentForm({ articleId }) {
    const id = useUserStore((state) => state.id);

    const [comment, setComment] = useState('');

    const commentChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const { mutate: commentWriteMutation } = useCommentWriteMutation();

    const commentWriteButtonClickHandler = (e) => {
        e.preventDefault();

        if (!comment) {
            alert('댓글을 입력해주세요.');
            return;
        }

        const commentForm = {
            userId: id,
            articleId,
            comment,
        };

        commentWriteMutation(commentForm);
    };

    return (
        <div className='w-full py-8 border-b border-solid border-gray-300'>
            <textarea
                onChange={commentChangeHandler}
                className='w-full h-[80px] px-2 py-3 mb-4 border border-solid border-gray-300 rounded-sm resize-none outline-none'
                placeholder='댓글을 작성하세요'
            ></textarea>
            <div className='flex justify-end'>
                <button
                    onClick={commentWriteButtonClickHandler}
                    className='px-3 py-2 font-bold border border-solid border-blue-500 bg-blue-500 rounded-md text-white'
                >
                    댓글 작성
                </button>
            </div>
        </div>
    );
}

export default CommentForm;
