import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { getNotifications } from '../../apis/notification.api';
import { useInView } from 'react-intersection-observer';
import NotificationItem from './NotificationItem';

const NOTIFICATIONS_PER_PAGE = 10;

function NotificationsListWrap() {
    const {
        data: notifications,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['notifications'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getNotifications({ pageParam }),
        getNextPageParam: (lastPage, allPages, LastPageParam) => {
            const nextPage = LastPageParam + 1;
            return lastPage.length === NOTIFICATIONS_PER_PAGE ? nextPage : undefined;
        },
        select: ({ pages }) => pages.flat(),
    });

    const { ref } = useInView({
        threshold: 1,
        onChange: (inView) => {
            if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
        },
    });

    return (
        <div className='w-full min-h-screen bg-white py-4 border-t border-solid border-gray-200'>
            <div className='w-[800px] mx-auto my-0 lg:w-full lg:px-2'>
                <div className='py-4 text-4xl font-bold  border-b border-solid border-gray-400 lg:text-xl'>
                    알림
                </div>
                {notifications?.length > 0 ? (
                    notifications.map((notification, idx) => {
                        return (
                            <NotificationItem
                                ref={ref}
                                idx={notification.id}
                                notification={notification}
                            />
                        );
                    })
                ) : (
                    <div className='w-full py-4 text-center text-2xl font-bold text-blue-500 lg:text-base'>
                        알림이 존재하지 않습니다.
                    </div>
                )}
            </div>
        </div>
    );
}

export default NotificationsListWrap;
