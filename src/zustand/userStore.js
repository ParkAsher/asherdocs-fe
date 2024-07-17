import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            id: '',
            role: null,
            nickname: '',
            setLoggedIn: (accessToken, userNickname, userId, userRole) => {
                sessionStorage.setItem('token', accessToken);

                set({ isLoggedIn: true, nickname: userNickname, id: userId, role: userRole });
            },
            setLoggedOut: () => {
                sessionStorage.removeItem('token');

                set({ isLoggedIn: false, nickname: '', id: '', role: null });
            },
        }),
        {
            name: 'user state',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useUserStore;
