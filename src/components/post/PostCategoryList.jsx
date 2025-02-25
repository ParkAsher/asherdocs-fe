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
        <div className='absolute bg-white rounded -left-[196px] w-[180px] xl:relative xl:w-full xl:left-auto xl:mb-4 xl:p-4 xl:flex xl:gap-2 xl:overflow-x-auto'>
            <div className='text-lg font-bold px-2 py-4 border-b border-solid border-gray-200 xl:hidden'>
                카테고리
            </div>
            <div
                className={`text-sm p-2 border-b border-solid border-gray-200 xl:p-0 xl:border-none ${
                    categoryParam ? 'text-black' : 'text-blue-500 font-bold'
                } xl: shrink-0`}
            >
                <Link to={`/`}>전체보기</Link>
            </div>
            {categoryList.map((category, idx) => {
                const { id, categoryName, contentsCount } = category;
                return (
                    <div
                        className={`text-sm p-2 border-b border-solid border-gray-200 xl:p-0 xl:border-none ${
                            categoryParam === categoryName
                                ? 'text-blue-500 font-bold'
                                : 'text-black'
                        } xl: shrink-0`}
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
