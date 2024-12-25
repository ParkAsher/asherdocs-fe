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
        <div className='w-full pt-4 bg-gray-200 flex justify-center items-center'>
            <div className='w-[800px] bg-white py-4 flex items-center justify-center rounded lg:w-full'>
                <div className='relative flex items-center w-full max-w-sm'>
                    <input
                        type='text'
                        className='w-full bg-gray-200 py-2 pr-10 pl-4 text-gray-700 bg-white rounded focus:outline-none'
                        placeholder='검색'
                        onChange={keywordOnchangeHandler}
                    />
                    <div
                        onClick={SearchButtonClickHandler}
                        className='absolute inset-y-0 right-0 flex items-center pr-3'
                    >
                        <button>
                            <IoSearch />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
