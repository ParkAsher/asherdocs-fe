import React, { useMemo, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import oc from 'open-color';

hljs.configure({
    languages: ['javascript', 'typescript', 'python', 'java'],
});

function WriteQuillEditor({ handler, value }) {
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
                value={value}
            ></ReactQuill>
        </QuillWrapper>
    );
}

const ReactQuillEditorStyle = {
    width: '100%',
};

const QuillWrapper = styled.div`
    margin-bottom: 3rem;

    .ql-editor {
        height: 500px;
        font-size: 1rem;
        line-height: 1.5;
    }

    .ql-container.ql-snow,
    .ql-toolbar.ql-snow {
        border-radius: 5px;
        border: 1px solid ${oc.gray[6]};
    }
`;

export default WriteQuillEditor;
