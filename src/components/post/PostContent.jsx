import React, { useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { formatDate, postTimeFormat } from '../../utils/date';
import useUserStore from '../../zustand/userStore';
import { useDeleteMutation } from '../../hooks/queries/article.query';
import { useNavigate } from 'react-router-dom';
import CommentForm from '../comment/CommentForm';
import CommentList from '../comment/CommentList';
import WriteTipTapEditor from '../editor/WriteTipTapEditor';

function PostContent(props) {
    const { article } = props;
    const { id, title, category, userId: authorId, content, thumbnail, createdAt, views } = article;

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
                    {/* 글 제목 */}
                    <div className='mb-8 font-bold text-4xl break-all sm:text-xl'>{title}</div>

                    {/* 글 상세 */}
                    <div className='w-full mb-4 flex items-center justify-between text-gray-400 sm:text-sm'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <div className='flex flex-wrap items-center gap-1'>
                                <FaRegEye /> {views}
                            </div>
                            <div className='category-name'>{category.categoryName}</div>
                            <div className='created-at'>{postTimeFormat(createdAt)}</div>
                        </div>
                        {isLoggedIn && role === 1 ? (
                            <div className='flex items-center justify-between gap-2 cursor-pointer sm:text-sm'>
                                <div onClick={postEditOnClickHandler}>수정</div>
                                <div onClick={postDeleteOnClickHandler}>삭제</div>
                            </div>
                        ) : null}
                    </div>

                    {/* 썸네일 */}
                    <div className='mb-8 w-full h-full md:aspect-w-8 md:aspect-h-5'>
                        <img
                            className='w-[800px] h-[500px] object-cover rounded lg:w-full lg:h-full'
                            src={thumbnail}
                            alt='thumbnail'
                        />
                    </div>

                    {/* 글 내용 */}
                    <WriteTipTapEditor content={content} editable={false} />
                </div>
            </div>
            {isLoggedIn && <CommentForm articleId={id} authorId={authorId} />}
            <CommentList articleId={id} />
        </>
    );
}

export default PostContent;
