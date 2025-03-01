import React, { useRef, useState } from 'react';
import {
    RiBold,
    RiItalic,
    RiStrikethrough,
    RiUnderline,
    RiAlignLeft,
    RiAlignCenter,
    RiAlignRight,
    RiAlignJustify,
    RiListUnordered,
    RiListOrdered,
    RiH1,
    RiH2,
    RiH3,
    RiH4,
    RiCodeBoxLine,
    RiPaintBrushLine,
    RiImageAddLine,
    RiPaintFill,
    RiDoubleQuotesL,
    RiYoutubeFill,
    RiEraserFill,
} from 'react-icons/ri';
import imageCompression from 'browser-image-compression';
import axios from 'axios';

// Color Palette Component
const ColorPalette = ({ onSelectColor }) => {
    const colors = [
        '#ff0000',
        '#0000ff',
        '#008000',
        '#ff9800',
        '#800080',
        '#ffff00',
        '#000000',
        '#ffffff',
    ];

    return (
        <div className='flex gap-2 p-2 bg-white border border-gray-300 mb-2'>
            {colors.map((color, index) => (
                <button
                    key={index}
                    onClick={() => onSelectColor(color)}
                    className='w-8 h-8 rounded-full border border-solid border-gray-300'
                    style={{ backgroundColor: color }}
                />
            ))}

            {/* */}
            <button
                onClick={() => onSelectColor(null)}
                className='w-8 h-8 flex items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-gray-500'
            >
                <RiEraserFill />
            </button>
        </div>
    );
};

function WriteTipTapToolbar({ editor }) {
    const [showColorPalette, setShowColorPalette] = useState(false);
    const [showBgColorPalette, setShowBgColorPalette] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [selectedBgColor, setSelectedBgColor] = useState('#ffffff');

    const fileInputRef = useRef(null);

    if (!editor) return null;

    const toolbarButtonStyle = (type, options = null) => {
        const isActive = options ? editor.isActive(type, options) : editor.isActive(type);

        return `p-1 rounded ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`;
    };

    // 글자 색
    const handleTextColor = (color) => {
        setSelectedColor(color);

        if (!color) {
            editor.commands.unsetColor();
        } else {
            editor.chain().focus().setColor(color).run();
        }

        setShowColorPalette(false);
    };

    // 글자 배경색
    const handleBgColor = (color) => {
        setSelectedBgColor(color);

        if (!color) {
            editor.commands.unsetHighlight();
        } else {
            editor.chain().focus().toggleHighlight({ color }).run();
        }

        setShowBgColorPalette(false);
    };

    // 이미지 업로드 버튼 클릭
    const handleImageUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // 이미지 업로드
    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        // 이미지 압축 옵션
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
        };

        const token = sessionStorage.getItem('token') ?? null;

        try {
            const compressedFile = await imageCompression(file, options);

            let formData = new FormData();
            formData.append('image', compressedFile);

            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/image/upload`,
                formData,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            // 에디터에 삽입
            editor.chain().focus().setImage({ src: response.data }).run();
        } catch (error) {
            console.log(error);
            alert('이미지를 업로드 할 수 없습니다. 관리자에게 문의하세요.');
        }
    };

    // 유튜브 링크 업로드
    const addYoutubeVideo = () => {
        const url = prompt('Youtube URL을 입력하세요.');

        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
            });
        }
    };

    return (
        <>
            <div className='w-full flex flex-wrap gap-2 border border-gray-300 mb-2 p-2'>
                {/* RiBold */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={toolbarButtonStyle('bold')}
                >
                    <RiBold />
                </button>

                {/* RiItalic */}
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={toolbarButtonStyle('italic')}
                >
                    <RiItalic />
                </button>

                {/* RiStrikethrough */}
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={toolbarButtonStyle('strike')}
                >
                    <RiStrikethrough />
                </button>

                {/* RiUnderline */}
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={toolbarButtonStyle('underline')}
                >
                    <RiUnderline />
                </button>

                {/* RiAlignLeft */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={toolbarButtonStyle({ textAlign: 'left' })}
                >
                    <RiAlignLeft />
                </button>

                {/* RiAlignCenter */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={toolbarButtonStyle({ textAlign: 'center' })}
                >
                    <RiAlignCenter />
                </button>

                {/* RiAlignRight */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={toolbarButtonStyle({ textAlign: 'right' })}
                >
                    <RiAlignRight />
                </button>

                {/* RiAlignJustify */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={toolbarButtonStyle({ textAlign: 'justify' })}
                >
                    <RiAlignJustify />
                </button>

                {/* RiListUnordered */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={toolbarButtonStyle('bulletList')}
                >
                    <RiListUnordered />
                </button>

                {/* RiListOrdered */}
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={toolbarButtonStyle('orderList')}
                >
                    <RiListOrdered />
                </button>

                {/* RiH1 */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={toolbarButtonStyle('heading', { level: 1 })}
                >
                    <RiH1 />
                </button>

                {/* RiH2 */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={toolbarButtonStyle('heading', { level: 2 })}
                >
                    <RiH2 />
                </button>

                {/* RiH3 */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={toolbarButtonStyle('heading', { level: 3 })}
                >
                    <RiH3 />
                </button>

                {/* RiH4 */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={toolbarButtonStyle('heading', { level: 4 })}
                >
                    <RiH4 />
                </button>

                {/* RiDoubleQuotesL */}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={toolbarButtonStyle('blockquote')}
                >
                    <RiDoubleQuotesL />
                </button>

                {/* RiCodeBoxLine */}
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={toolbarButtonStyle('codeBlock')}
                >
                    <RiCodeBoxLine />
                </button>

                {/* RiImageAddLine */}
                <button onClick={handleImageUpload} className='p-1 rounded hover:bg-gray-200'>
                    <RiImageAddLine />
                    <input
                        ref={fileInputRef}
                        type='file'
                        accept='image/*'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </button>

                {/* RiPaintBrushLine */}
                <button
                    onClick={() => setShowColorPalette(!showColorPalette)}
                    className='p-1 rounded hover:bg-gray-200'
                >
                    <RiPaintBrushLine />
                </button>

                {/* RiPaintFill */}
                <button
                    onClick={() => setShowBgColorPalette(!showBgColorPalette)}
                    className='p-1 rounded hover:bg-gray-200'
                >
                    <RiPaintFill />
                </button>

                {/* Youtube */}
                <button onClick={addYoutubeVideo} className='p-1 rounded hover:bg-gray-200'>
                    <RiYoutubeFill />
                </button>
            </div>
            {showColorPalette && <ColorPalette onSelectColor={handleTextColor} />}
            {showBgColorPalette && <ColorPalette onSelectColor={handleBgColor} />}
        </>
    );
}

export default WriteTipTapToolbar;
