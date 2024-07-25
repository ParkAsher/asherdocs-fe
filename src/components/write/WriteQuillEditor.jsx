import React, { useEffect, useMemo, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

hljs.configure({
    languages: ['javascript', 'typescript', 'python', 'java'],
});

function WriteQuillEditor({ handler }) {
    const quillRef = useRef();

    const handleChange = (value) => {
        const e = {
            target: {
                name: 'content',
                value: value,
            },
        };
        handler(e);
    };

    const modules = useMemo(
        () => ({
            syntax: { highlight: (text) => hljs.highlightAuto(text).value },
            toolbar: {
                container: [
                    [{ header: [] }],
                    [{ size: [] }],
                    [{ color: [] }],
                    [{ background: [] }],
                    [{ align: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                ],
            },
        }),
        []
    );

    return (
        <QuillWrapper>
            <ReactQuill
                ref={quillRef}
                style={ReactQuillEditorStyle}
                theme='snow'
                modules={modules}
                onChange={handleChange}
            ></ReactQuill>
        </QuillWrapper>
    );
}

const ReactQuillEditorStyle = {
    width: '100%',
    height: '50vh',
};

const QuillWrapper = styled.div`
    .ql-editor {
        font-size: 1rem;
        line-height: 1.5;
    }
`;

export default WriteQuillEditor;
