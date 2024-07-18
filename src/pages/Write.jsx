import React from 'react';
import WriteForm from '../components/write/WriteForm';
import useUserStore from '../zustand/userStore';

function Write() {
    const { isLoggedIn, id, role, nickname } = useUserStore((state) => state);

    // 권한 없는 회원 접근 금지
    if (!isLoggedIn || role != 1) {
        alert('권한이 없습니다.');
        window.location.href = '/';
        return;
    }

    return <WriteForm />;
}

export default Write;
