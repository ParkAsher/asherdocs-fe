import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';
import oc from 'open-color';
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
            <PostContentWrap>
                <PostHeader>
                    <div className='title'>{title}</div>
                    <PostSubInfo>
                        <div className='info'>
                            <div className='views'>
                                <FaRegEye /> {views}
                            </div>
                            <div className='category-name'>{category.categoryName}</div>
                            <div className='created-at'>{formatDate(createdAt)}</div>
                        </div>
                        {isLoggedIn && role === 1 ? (
                            <div className='post-btn-wrap'>
                                <div onClick={postEditOnClickHandler}>수정</div>
                                <div onClick={postDeleteOnClickHandler}>삭제</div>
                            </div>
                        ) : null}
                    </PostSubInfo>
                    <PostThumbnail>
                        <img src={thumbnail} alt='thumbnail' />
                    </PostThumbnail>
                </PostHeader>
                <div className='ql-snow'>
                    <div
                        className='view ql-editor'
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>
            </PostContentWrap>
            <CommentForm />
        </>
    );
}

const PostContentWrap = styled.div`
    margin-top: 2rem;
`;

const PostHeader = styled.div`
    width: 100%;

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        word-break: keep-all;
        overflow-wrap: break-word;
        margin-bottom: 2rem;
    }
`;

const PostSubInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${oc.gray[6]};

    .info {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .views {
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }
    }

    .post-btn-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.3rem;
        cursor: pointer;
    }
`;

const PostThumbnail = styled.div`
    width: 100%;
    height: 500px;
    margin: 2rem 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const PostContentArea = styled.div``;

export default PostContent;
