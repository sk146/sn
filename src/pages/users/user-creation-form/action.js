import {userService} from '../../../services';
import {alertActions} from '../../auth/register/alert/alert.actions.js';
import {userConstants} from './constant';

export const registerActions = {
    createUser,
};

function createUser(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    dispatch(alertActions.success('Create user successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.CREATE_USER_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATE_USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATE_USER_FAILURE, error } }
}
