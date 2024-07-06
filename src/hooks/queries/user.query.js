import { useMutation } from '@tanstack/react-query';
import { checkEmailDuplicated, checkNicknameDuplicated } from '../../apis/user.api';

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

export { useDuplicatedCheckMutation };
