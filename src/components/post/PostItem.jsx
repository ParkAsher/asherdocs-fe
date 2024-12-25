import React from 'react';
import Link from '../common/Link';
import { FaRegEye } from 'react-icons/fa';
import { formatDate } from '../../utils/date';

const PostItem = React.forwardRef((props, ref) => {
    const { id, thumbnail, title, views, createdAt, category } = props.article;
    const { categoryName } = category;

    return (
        <div className='w-full bg-white rounded mb-4' ref={ref}>
            <Link to={`/article/${id}`}>
                <div className='w-full h-[500px] p-2 rounded'>
                    <img className='w-full h-full object-contain' src={thumbnail} alt='asherdocs' />
                </div>
            </Link>
            <Link to={`/article/${id}`}>
                <div className='text-2xl p-2 font-bold break-all xl:px-2'>{title}</div>
            </Link>
            <div className='w-full p-2 flex items-center flex-wrap gap-2 text-gray-500 xl:px-2'>
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
