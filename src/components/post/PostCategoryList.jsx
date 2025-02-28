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
        <div className='absolute bg-white rounded -left-[196px] w-[180px] xl:relative xl:w-full xl:left-auto xl:mb-4 xl:py-4 xl:px-2 xl:flex xl:gap-2 xl:overflow-x-auto'>
            <div className='text-lg font-bold px-2 py-4 border-b border-solid border-gray-200 xl:hidden'>
                카테고리
            </div>
            <div
                className={`text-sm p-2 border-b border-solid border-gray-200 xl:p-1 xl:rounded xl:border-none ${
                    categoryParam ? 'text-black' : 'text-blue-500 xl:bg-blue-500 xl:text-white'
                } xl: shrink-0`}
            >
                <Link to={`/`}>전체보기</Link>
            </div>
            {categoryList.map((category, idx) => {
                const { id, categoryName, contentsCount } = category;
                return (
                    <div
                        className={`text-sm p-2 border-b border-solid border-gray-200 xl:border-none xl:rounded xl:p-1 xl:shrink-0 ${
                            categoryParam === categoryName
                                ? 'text-blue-500 xl:text-white xl:bg-blue-500'
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
        </div>
    );
}

export default PostCategoryList;
