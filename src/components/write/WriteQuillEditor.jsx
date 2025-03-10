// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import styled from 'styled-components';
// import oc from 'open-color';
// import axios from 'axios';
// import imageCompression from 'browser-image-compression';

// hljs.configure({
//     languages: ['javascript', 'typescript', 'python', 'java'],
// });

// function WriteQuillEditor({ handler, content }) {
//     const quillRef = useRef();

//     const [value, setValue] = useState('');

//     useEffect(() => {
//         if (content) setValue(content);
//     }, []);

//     const handleChange = (e) => {
//         setValue(e);

//         const a = {
//             target: {
//                 name: 'content',
//                 value: value,
//             },
//         };
//         handler(a);
//     };

//     // Image Upload Handler
//     const imageUploadHandler = async () => {
//         const input = document.createElement('input');

//         input.setAttribute('type', 'file');
//         input.setAttribute('accept', 'image/*');
//         input.click();

//         input.addEventListener('change', async () => {
//             const file = input.files[0];

//             // 이미지 압축 옵션
//             const options = {
//                 maxSizeMB: 1,
//                 maxWidthOrHeight: 1200,
//                 useWebWorker: true,
//             };
//             const token = sessionStorage.getItem('token') ?? null;

//             try {
//                 const compressedFile = await imageCompression(file, options);

//                 let formData = new FormData();
//                 formData.append('image', compressedFile);

//                 const response = await axios.post(
//                     `${process.env.REACT_APP_SERVER_URL}/image/upload`,
//                     formData,
//                     {
//                         withCredentials: true,
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );

//                 const editor = quillRef.current.getEditor();
//                 const range = editor.getSelection();

//                 editor.insertEmbed(range.index, 'image', response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         });
//     };

//     const modules = useMemo(
//         () => ({
//             syntax: { highlight: (text) => hljs.highlightAuto(text).value },
//             toolbar: {
//                 container: [
//                     [{ header: [] }],
//                     [{ size: [] }],
//                     [{ color: [] }],
//                     [{ background: [] }],
//                     [{ align: [] }],
//                     [{ list: 'ordered' }, { list: 'bullet' }],
//                     ['bold', 'italic', 'underline', 'strike'],
//                     ['blockquote', 'code-block'],
//                     ['link', 'image'],
//                 ],
//                 handlers: {
//                     image: imageUploadHandler,
//                 },
//             },
//         }),
//         []
//     );

//     return (
//         <QuillWrapper>
//             <ReactQuill
//                 ref={quillRef}
//                 style={ReactQuillEditorStyle}
//                 theme='snow'
//                 modules={modules}
//                 onChange={(e) => handleChange(e)}
//                 value={value}
//             ></ReactQuill>
//         </QuillWrapper>
//     );
// }

// const ReactQuillEditorStyle = {
//     width: '100%',
// };

// const QuillWrapper = styled.div`
//     margin-bottom: 3rem;

//     .ql-editor {
//         height: 500px;
//         font-size: 1rem;
//         line-height: 1.5;
//     }

//     .ql-container.ql-snow,
//     .ql-toolbar.ql-snow {
//         border-radius: 5px;
//         border: 1px solid ${oc.gray[6]};
//     }
// `;

// export default WriteQuillEditor;
