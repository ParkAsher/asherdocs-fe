import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import WriteTipTapToolbar from './WriteTipTapToolbar';
import { extensions } from '../constants/tiptapExtensions';

function WriteTipTapEditor({ handler, content, editable }) {
    const editor = useEditor({
        editable,
        extensions: extensions,
        editorProps: {
            attributes: {
                class: `!prose !max-w-none p-2 mb-2 focus:outline-none ${
                    editable
                        ? 'min-h-[800px] border border-solid border-gray-300'
                        : 'xxl:!prose-xl lg:!prose-lg md:!prose-base sm:!prose-xs'
                }`,
            },
        },
        onUpdate: ({ editor }) => {
            const value = editor.getHTML();

            const a = {
                target: {
                    name: 'content',
                    value: value,
                },
            };

            handler(a);
        },
        content: content,
    });

    useEffect(() => {
        if (editor && !editable) {
            editor.commands.setContent(content, false);
        }
    }, [editor, content, editable]);

    return (
        <div className='w-full relative'>
            {editable && <WriteTipTapToolbar editor={editor} />}
            <EditorContent editor={editor} />
        </div>
    );
}

export default WriteTipTapEditor;
