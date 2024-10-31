import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../apis/category.api';
import { useQuery } from '@tanstack/react-query';

function PostCategoryList({ category: categoryParam }) {
    // 카테고리 리스트
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    if (isLoading) return;

    const categoryList = Array.isArray(categories) ? categories : [];

    return (
        <div className='absolute -left-[200px] w-[180px] xl:relative xl:w-full xl:left-auto xl:mb-8 xl:p-4 xl:border-b xl:border-solid xl:border-gray-300'>
            <div className='font-bold text-xl pb-3 mb-6 border-b border-solid border-black xl:hidden'>
                카테고리
            </div>
            <ul className='xl:grid xl:grid-flow-row-dense xl:grid-cols-4 xl:gap-2'>
                <div
                    className={`pb-2 xl:pb-0 ${
                        categoryParam ? 'text-black' : 'text-blue-500 font-bold'
                    }`}
                >
                    <Link to={`/`}>전체보기</Link>
                </div>
                {categoryList.map((category, idx) => {
                    const { id, categoryName, contentsCount } = category;
                    return (
                        <div
                            className={`pb-2 xl:pb-0 ${
                                categoryParam === categoryName
                                    ? 'text-blue-500 font-bold'
                                    : 'text-black'
                            }`}
                            key={id}
                        >
                            <Link to={`/?category=${categoryName}`}>
                                {categoryName} ({contentsCount})
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default PostCategoryList;
