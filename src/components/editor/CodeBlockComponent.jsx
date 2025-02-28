import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

export default ({
    node: {
        attrs: { language: defaultLanguage },
    },
    updateAttributes,
    extension,
    editable,
}) => (
    <NodeViewWrapper className=''>
        {editable ? (
            <select
                className='border border-solid border-black rounded'
                contentEditable={false}
                defaultValue={defaultLanguage}
                onChange={(event) => updateAttributes({ language: event.target.value })}
            >
                <option value='null'>auto</option>
                <option disabled>—</option>
                {extension.options.lowlight.listLanguages().map((lang, index) => (
                    <option key={index} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>
        ) : null}{' '}
        <pre className='!m-0'>
            <NodeViewContent className='!whitespace-pre !overflow-auto' as='code' />
        </pre>
    </NodeViewWrapper>
);
