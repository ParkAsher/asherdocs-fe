import React from 'react';
import SearchForm from '../components/search/SearchForm';
import SearchListWrap from '../components/search/SearchListWrap';

function Search() {
    return (
        <>
            <SearchForm />
            <div className='w-full border-t border-solid border-gray-300'>
                <div className='mx-auto my-0 w-[800px] xl:w-full'>
                    <SearchListWrap />
                </div>
            </div>
        </>
    );
}

export default Search;
