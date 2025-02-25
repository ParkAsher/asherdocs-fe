import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (date) => {
    const [datePart, timePart] = date.split('T'); // 'T'로 나누기
    const time = timePart.split('.')[0]; // 밀리초 제거

    return `${datePart.replace(/-/g, '.')} ${time}`; // yyyy.MM.dd HH:mm:ss 형식으로 변환
};

export function notificationTimeFormat(date) {
    const targetDate = new Date(date);
    const now = new Date();
    const diff = now.getTime() - targetDate.getTime();

    if (diff < 1000 * 60 * 1) {
        return '방금 전';
    }

    if (diff < 1000 * 60 * 60 * 24 * 7) {
        return formatDistanceToNow(targetDate, { addSuffix: true, locale: ko });
    }

    return format(targetDate, 'yyyy년 MM월 dd일', { locale: ko });
}
