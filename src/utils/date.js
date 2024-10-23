export const formatDate = (date) => {
    const [datePart, timePart] = date.split('T'); // 'T'로 나누기
    const time = timePart.split('.')[0]; // 밀리초 제거

    return `${datePart.replace(/-/g, '.')} ${time}`; // yyyy.MM.dd HH:mm:ss 형식으로 변환
};
