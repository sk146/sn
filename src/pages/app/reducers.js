import { combineReducers } from 'redux';

import { authentication } from '../login/reducer';
import { registration } from '../register/reducer';
import { users } from '../../_reducers/users.reducer';
import { alert } from '../../_reducers/alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;
