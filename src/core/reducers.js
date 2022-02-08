import { combineReducers } from 'redux';

import { authentication } from '../pages/auth/login/reducer';
import { registration } from '../pages/users/user-creation-form/reducer';
import { users } from '../pages/dashboard/reducer';
import { alert } from '../pages/dashboard/alert/alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;
