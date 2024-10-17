import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Link from '../common/Link';
import { FaRegEye } from 'react-icons/fa';
import { formatDate } from '../../utils/date';

const PostItem = React.forwardRef((props, ref) => {
    const { id, thumbnail, title, views, createdAt, category } = props.article;
    console.log(props.article);
    // const { categoryName } = category;

    return (
        <Item ref={ref}>
            <Link to={`/article/${id}`}>
                <PostThumbnail>
                    <img src={thumbnail} />
                </PostThumbnail>
            </Link>
            <Link to={`/article/${id}`}>
                <h2>{title}</h2>
            </Link>
            <PostSubInfo>
                <div className='views'>
                    <FaRegEye /> {views}
                </div>
                {/* <div className='category-name'>{categoryName}</div> */}
                {/* <div className='created-at'>{formatDate(createdAt)}</div> */}
            </PostSubInfo>
        </Item>
    );
});

const Item = styled.div`
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    border-bottom: 1px solid ${oc.gray[1]};

    &:last-child {
        border-bottom: none;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        word-break: keep-all;
        font-weight: bold;
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

const PostSubInfo = styled.div`
    width: 100%;
    color: ${oc.gray[5]};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    .views {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`;

export default PostItem;
