import React, { useCallback } from 'react';
import useInputs from '../../hooks/useInputs';
import styled from 'styled-components';
import Button from '../common/Button';
import WriteTitleInput from '../write/WriteTitleInput';
import WriteCategoryInput from '../write/WriteCategoryInput';
import WriteThumbnailInput from '../write/WriteThumbnailInput';
import { useEditMutation } from '../../hooks/queries/article.query';
import WriteQuillEditor from '../write/WriteQuillEditor';

function EditForm(props) {
    const { article } = props;
    const { id, title, category, content, thumbnail } = article;
    const { id: categoryId } = category;

    const [values, handler] = useInputs({
        title: title,
        category: categoryId,
        content: content,
        thumbnail: thumbnail,
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

    const { mutate: editMutation } = useEditMutation(id);

    const handleEditButtonClick = (e) => {
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

        const editForm = {
            title: values.title,
            categoryId: Number(values.category),
            content: values.content,
            thumbnail: values.thumbnail,
        };

        editMutation(editForm);
    };

    return (
        <WriteBlock>
            <WriteFormBlock>
                <WriteFormHeadSpan>제목</WriteFormHeadSpan>
                <WriteTitleInput handler={titleChangeHandler} value={values.title} />
                <WriteFormHeadSpan>카테고리</WriteFormHeadSpan>
                <WriteCategoryInput handler={selectOptionChangeHandler} value={values.category} />
                <WriteFormHeadSpan>썸네일</WriteFormHeadSpan>
                <WriteThumbnailInput handler={thumbnailChangeHandler} value={values.thumbnail} />
                <WriteQuillEditor handler={contentChangeHandler} content={values.content} />
                <WriteFormButtonBlock>
                    <Button to='/' $colorname='gray' $colornumber='5'>
                        취소
                    </Button>
                    <Button onClick={handleEditButtonClick}>수정</Button>
                </WriteFormButtonBlock>
            </WriteFormBlock>
        </WriteBlock>
    );
}

const WriteBlock = styled.div`
    width: 100%;
    min-height: calc(100vh - 4rem);

    display: flex;
    justify-content: center;
`;

const WriteFormBlock = styled.div`
    width: 1700px;
    padding: 1rem 0;
    margin: 1rem 0;
`;

const WriteFormHeadSpan = styled.p`
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    font-weight: bold;
`;

const WriteFormButtonBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
`;

export default EditForm;
