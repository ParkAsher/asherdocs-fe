import React, { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import WriteTipTapToolbar from './WriteTipTapToolbar';
import { extensions } from '../constants/tiptapExtensions';

function WriteTipTapEditor({ handler, content, editable }) {
    const editor = useEditor({
        editable,
        extensions: extensions({ editable }),
        editorProps: {
            attributes: {
                class: `!prose !max-w-none mb-2 focus:outline-none ${
                    editable
                        ? 'p-2 min-h-[800px] border border-solid border-gray-300'
                        : 'p-0 sm:!prose-sm'
                }`,
            },
            spellcheck: false,
        },
        onUpdate: ({ editor }) => {
            const value = editor.getHTML();

            handler({
                target: {
                    name: 'content',
                    value: value,
                },
            });
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
