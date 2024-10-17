import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const keywordOnchangeHandler = (e) => {
        setKeyword(e.target.value);
    };

    const SearchButtonClickHandler = () => {
        if (!keyword) {
            alert('검색어를 입력해주세요.');
            return;
        }

        navigate(`/search?keyword=${keyword}`);
    };

    return (
        <div className='w-full h-12 my-5 flex justify-center items-center gap-2'>
            <input
                type='search'
                className='h-full px-4 text-base border border-gray-300 rounded-lg focus:outline-none'
                placeholder='검색'
                onChange={keywordOnchangeHandler}
            />
            <button
                type='submit'
                className='px-4 h-full text-white bg-blue-500 rounded-lg font-bold'
                onClick={SearchButtonClickHandler}
            >
                <IoSearch />
            </button>
        </div>
    );
}

export default SearchForm;
