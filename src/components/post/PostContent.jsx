import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';
import oc from 'open-color';

function PostContent(props) {
    const { article } = props;
    const { title, category, content, thumbnail, createdAt, views } = article;

    return (
        <PostContentWrap>
            <PostHeader>
                <div className='title'>{title}</div>
                <PostSubInfo>
                    <div className='views'>
                        <FaRegEye /> {views}
                    </div>
                    <div className='category-name'>{category.categoryName}</div>
                    <div className='created-at'>{formatDate(createdAt)}</div>
                </PostSubInfo>
                <PostThumbnail>
                    <img src={thumbnail} />
                </PostThumbnail>
            </PostHeader>
            <PostContentArea dangerouslySetInnerHTML={{ __html: content }}></PostContentArea>
        </PostContentWrap>
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
    gap: 0.5rem;
    color: ${oc.gray[6]};

    .views {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`;

const PostThumbnail = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 2rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const PostContentArea = styled.div``;

export default PostContent;
