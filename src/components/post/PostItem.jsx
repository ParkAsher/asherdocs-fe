import React from 'react';
import Link from '../common/Link';
import { FaRegEye } from 'react-icons/fa';
import { formatDate } from '../../utils/date';

const PostItem = React.forwardRef((props, ref) => {
    const { id, thumbnail, title, views, createdAt, category } = props.article;
    const { categoryName } = category;

    return (
        <div className='w-full bg-white mb-4 rounded' ref={ref}>
            <Link to={`/article/${id}`}>
                <div className='w-full h-full rounded md:aspect-w-8 md:aspect-h-5'>
                    <img
                        className='w-[800px] h-[500px] object-cover rounded lg:w-full lg:h-full'
                        src={thumbnail}
                        alt='asherdocs'
                    />
                </div>
            </Link>
            <Link to={`/article/${id}`}>
                <div className='text-2xl p-2 font-bold break-all xl:px-2 xl:text-lg'>{title}</div>
            </Link>
            <div className='w-full p-2 flex items-center flex-wrap gap-2 text-gray-500 xl:px-2 xl:text-xs'>
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
