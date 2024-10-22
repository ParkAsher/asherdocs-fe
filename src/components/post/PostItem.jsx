import React from 'react';
import Link from '../common/Link';
import { FaRegEye } from 'react-icons/fa';
import { formatDate } from '../../utils/date';

const PostItem = React.forwardRef((props, ref) => {
    const { id, thumbnail, title, views, createdAt, category } = props.article;
    const { categoryName } = category;

    return (
        <div className='w-full pb-8 mb-8 border-b border-solid border-gray-300' ref={ref}>
            <Link to={`/article/${id}`}>
                <div className='w-full h-[500px] mb-4'>
                    <img className='w-full h-full object-cover' src={thumbnail} alt='asherdocs' />
                </div>
            </Link>
            <Link to={`/article/${id}`}>
                <div className='text-2xl font-bold break-all mb-2 xl:px-2'>{title}</div>
            </Link>
            <div className='w-full flex items-center flex-wrap gap-2 text-gray-500 xl:px-2'>
                <div className='flex items-center gap-1'>
                    <FaRegEye /> {views}
                </div>
                <div className='category-name'>{categoryName}</div>
                <div className='created-at'>{formatDate(createdAt)}</div>
            </div>
        </div>
    );
});

export default PostItem;
