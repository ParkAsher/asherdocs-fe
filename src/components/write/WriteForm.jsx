import React, { useCallback } from 'react';
import styled from 'styled-components';
import WriteCategoryInput from './WriteCategoryInput';
import useInputs from '../../hooks/useInputs';
import WriteTitleInput from './WriteTitleInput';
import WriteQuillEditor from './WriteQuillEditor';
import Button from '../common/Button';
import useUserStore from '../../zustand/userStore';
import { useWriteMutation } from '../../hooks/queries/article.query';
import WriteThumbnailInput from './WriteThumbnailInput';
import WriteTipTapEditor from '../editor/WriteTipTapEditor';

function WriteForm() {
    const id = useUserStore((state) => state.id);

    const [values, handler, resetValue] = useInputs({
        title: '',
        category: '',
        content: '',
        thumbnail: '',
    });

    const titleChangeHandler = useCallback(
        (e) => {
            handler(e);
        },
        [handler]
    );

    const selectOptionChangeHandler = useCallback(
        (e) => {
            handler(e);
        },
        [handler]
    );

    const contentChangeHandler = useCallback(
        (e) => {
            handler(e);
        },
        [handler]
    );

    const thumbnailChangeHandler = useCallback(
        (e) => {
            handler(e);
        },
        [handler]
    );

    const { mutate: writeMutation } = useWriteMutation();

    const handleWriteButtonClick = (e) => {
        e.preventDefault();

        if (!values.title) {
            alert('제목을 입력해주세요.');
            return;
        }

        if (!values.category) {
            alert('카테고리를 선택해주세요.');
            return;
        }

        if (!values.content) {
            alert('내용을 입력해주세요.');
            return;
        }

        if (!id) {
            alert('로그인 후 이용해주세요.');
            return;
        }

        const writeForm = {
            title: values.title,
            categoryId: Number(values.category),
            content: values.content,
            thumbnail: values.thumbnail,
            userId: id,
        };

        writeMutation(writeForm);
    };

    return (
        <div className='w-full flex justify-center'>
            <div className='w-[800px] py-4 my-4 md:w-full md:px-2'>
                <WriteCategoryInput handler={selectOptionChangeHandler} />
                <WriteTitleInput handler={titleChangeHandler} />
                {/* <WriteQuillEditor handler={contentChangeHandler} /> */}
                <WriteTipTapEditor handler={contentChangeHandler} editable={true} />
                <WriteThumbnailInput handler={thumbnailChangeHandler} />
                <WriteFormButtonBlock>
                    <Button to='/' $colorname='gray' $colornumber='5'>
                        취소
                    </Button>
                    <Button onClick={handleWriteButtonClick}>등록</Button>
                </WriteFormButtonBlock>
            </div>
        </div>
    );
}

const WriteFormButtonBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
`;

export default WriteForm;
