import { userConstants} from './constant';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.CREATE_USER_REQUEST:
            return { registering: true };
        case userConstants.CREATE_USER_SUCCESS:
            return {};
        case userConstants.CREATE_USER_FAILURE:
            return {};
        default:
            return state
    }
}
