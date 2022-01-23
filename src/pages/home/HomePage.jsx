import { connect } from 'react-redux';
import {userActions} from '../../_actions';
import {useEffect} from 'react';


const HomePage = ({getUsers, users, ...props}) => {
    useEffect(() => {
        getUsers();
    }, []);
    console.log(users)
    return <div>Hello world! HomePage</div>;
};

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
