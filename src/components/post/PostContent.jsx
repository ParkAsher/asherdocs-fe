import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { formatDate } from '../../utils/date';
import useUserStore from '../../zustand/userStore';
import { useDeleteMutation } from '../../hooks/queries/article.query';
import { useNavigate } from 'react-router-dom';
import CommentForm from '../comment/CommentForm';

function PostContent(props) {
    const { article } = props;
    const { id, title, category, content, thumbnail, createdAt, views } = article;

    const { isLoggedIn, role } = useUserStore((state) => state);

    const { mutate: deleteMutation } = useDeleteMutation(id);

    const navigate = useNavigate();

    const postEditOnClickHandler = () => {
        navigate(`/edit/${id}`);
    };

    const postDeleteOnClickHandler = () => {
        const check = window.confirm('삭제 하시겠습니까?');

        if (!check) return;

        // 글 삭제
        deleteMutation();
    };

    return (
        <>
            <div className='w-full py-8 border-b border-solid border-gray-300'>
                <div className='w-full'>
                    <div className='font-bold text-4xl break-all mb-8 sm:text-xl'>{title}</div>
                    <div className='w-full flex items-center justify-between text-gray-400 sm:text-sm'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <div className='flex flex-wrap items-center gap-1'>
                                <FaRegEye /> {views}
                            </div>
                            <div className='category-name'>{category.categoryName}</div>
                            <div className='created-at'>{formatDate(createdAt)}</div>
                        </div>
                        {isLoggedIn && role === 1 ? (
                            <div className='flex items-center justify-between gap-2 cursor-pointer sm:text-sm'>
                                <div onClick={postEditOnClickHandler}>수정</div>
                                <div onClick={postDeleteOnClickHandler}>삭제</div>
                            </div>
                        ) : null}
                    </div>
                    <div className='my-8 w-full h-[500px] sm:h-[300px]'>
                        <img
                            className='w-full h-full object-cover'
                            src={thumbnail}
                            alt='thumbnail'
                        />
                    </div>
                </div>
                <div className='ql-snow sm:text-sm'>
                    <div
                        className='view ql-editor !p-0'
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>
            </div>
            <CommentForm articleId={id} />
        </>
    );
}

export default PostContent;
