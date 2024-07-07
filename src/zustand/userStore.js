import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            nickname: '',
            setLoggedIn: (accessToken, userNickname) => {
                sessionStorage.setItem('token', accessToken);

                set({ isLoggedIn: true, nickname: userNickname });
            },
            setLoggedOut: () => {
                sessionStorage.removeItem('token');

                set({ isLoggedIn: false, nickname: '' });
            },
        }),
        {
            name: 'user state',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useUserStore;
