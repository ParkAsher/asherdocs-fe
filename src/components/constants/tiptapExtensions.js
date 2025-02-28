import { ReactNodeViewRenderer } from '@tiptap/react';
import CodeBlockComponent from '../editor/CodeBlockComponent';
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import Blockquote from '@tiptap/extension-blockquote';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import ImageResize from 'tiptap-extension-resize-image';
import Youtube from '@tiptap/extension-youtube';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, common, createLowlight } from 'lowlight';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

const lowlight = createLowlight(common);

lowlight.register('html', html);
lowlight.register('css', css);
lowlight.register('js', js);
lowlight.register('ts', ts);

export const extensions = ({ editable }) => {
    const extensionsList = [
        StarterKit,
        Color,
        Underline,
        Blockquote.configure({
            HTMLAttributes: { class: 'prose-quoteless' },
        }),
        Image,
        ImageResize,
        Heading.configure({
            levels: [1, 2, 3, 4],
            marks: '',
        }),
        Highlight.configure({ multicolor: true }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Youtube.configure({
            nocookie: true,
            allowFullscreen: true,
            progressBarColor: 'white',
        }),
    ];

    // editable이 true일 때만 CodeBlockLowLight 확장 추가
    if (editable) {
        extensionsList.push(
            CodeBlockLowlight.extend({
                addNodeView() {
                    return ReactNodeViewRenderer((props) => (
                        <CodeBlockComponent {...props} editable={editable} />
                    ));
                },
            }).configure({
                lowlight,
            })
        );
    } else {
        extensionsList.push(
            CodeBlockLowlight.configure({
                lowlight,
                HTMLAttributes: {
                    class: `!whitespace-pre !overflow-auto`,
                },
            })
        );
    }

    return extensionsList;
};
