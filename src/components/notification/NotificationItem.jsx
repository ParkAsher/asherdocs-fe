import React from 'react';
import { notificationTimeFormat } from '../../utils/date';
import { setNotificationRead } from '../../apis/notification.api';

const NotificationItem = React.forwardRef((props, ref) => {
    const { id, senderId, receiverId, articleId, isRead, message, createdAt } = props.notification;

    const notificationClickHandler = async () => {
        try {
            await setNotificationRead(id);

            window.location.href = `/article/${articleId}`;
        } catch (error) {
            console.log(error);
            alert('관리자에게 문의하세요.');
        }
    };

    return (
        <div
            ref={ref}
            className={`w-full py-4 px-2 cursor-pointer ${
                isRead ? 'bg-transparent' : 'bg-gray-100'
            } lg:px-0`}
            onClick={notificationClickHandler}
        >
            <div className='w-full text-gray-500 text-sm lg:text-xs'>
                {notificationTimeFormat(createdAt.toString())}
            </div>
            <div className='w-full text-base lg:text-sm'>{message}</div>
        </div>
    );
});

export default NotificationItem;
