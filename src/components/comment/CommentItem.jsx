import React from 'react';
import { formatDate } from './../../utils/date';

const CommentItem = React.forwardRef((props, ref) => {
    const { id, comment, createdAt, user } = props.comment;
    const { id: userId, nickname } = user;

    return (
        <div className='w-full py-6 border-b border-solid border-gray-300'>
            <div className='flex justify-between items-align mb-4'>
                <div className=''>
                    <div className='text-lg font-bold'>{nickname}</div>
                    <div className='text-sm text-gray-400'>{formatDate(createdAt)}</div>
                </div>
                <div className=''></div>
            </div>
            <div className='text-lg'>
                <div className='break-words break-keep'>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
});

export default CommentItem;
