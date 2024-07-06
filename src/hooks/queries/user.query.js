import { useMutation } from '@tanstack/react-query';
import { checkEmailDuplicated, checkNicknameDuplicated, signUp } from '../../apis/user.api';

// 중복검사
const useDuplicatedCheckMutation = (type, successCallback, errorCallback) => {
    let mutationFn = null;

    switch (type) {
        case 'email':
            mutationFn = checkEmailDuplicated;
            break;

        case 'nickname':
            mutationFn = checkNicknameDuplicated;
            break;

        default:
            break;
    }

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => successCallback(type, data, variables, context),
        onError: (error, variables, context) => errorCallback(type, error, variables, context),
    });
};

// 회원가입
const useSignupMutation = () => {
    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            alert('회원가입에 성공했습니다!');
            window.location.href = '/';
        },
        onError: (error) => {
            alert('다시 시도해주세요.');
            window.location.reload();
        },
    });
};

export { useDuplicatedCheckMutation, useSignupMutation };
