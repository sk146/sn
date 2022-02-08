import { connect } from 'react-redux';
import {userActions} from './action';
import {useEffect} from 'react';
import Link from 'react-router-dom/es/Link';


const Dashboard = ({getUsers, users, ...props}) => {
    useEffect(() => {
        getUsers();
    }, []);
    console.log(users);
    return <div>
        <Link to="/create-user">Create user</Link>
        <Link to="/users">Users</Link>
    </div>;
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

const connectedHomePage = connect(mapState, actionCreators)(Dashboard);
export { connectedHomePage as Dashboard };
