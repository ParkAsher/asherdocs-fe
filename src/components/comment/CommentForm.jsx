import React from 'react';

function CommentForm() {
    return (
        <div className='w-full py-8 border-b border-solid border-gray-300'>
            <textarea
                className='w-full h-[80px] px-2 py-3 mb-4 border border-solid border-gray-300 rounded-sm resize-none outline-none'
                placeholder='댓글을 작성하세요'
            ></textarea>
            <div className='flex justify-end'>
                <button className='px-3 py-2 font-bold border border-solid border-blue-500 bg-blue-500 rounded-md text-white'>
                    댓글 작성
                </button>
            </div>
        </div>
    );
}

export default CommentForm;
