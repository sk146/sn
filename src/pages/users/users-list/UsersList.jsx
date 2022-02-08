import {connect} from 'react-redux';
import {userActions} from './action';
import {useEffect} from 'react';
import Link from 'react-router-dom/es/Link';


const UsersList = ({getUsers, deleteUser, user, users, ...props}) => {
    useEffect(() => {
        getUsers();
    }, []);
    const handleDeleteUser = (id) => {
        return (e) => deleteUser(id);
    }
    console.log(users);
    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>Hi {user.firstName}!</h1>
            <p>You're logged in with React!!</p>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ?
                                        <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : <span> - <a onClick={handleDeleteUser(user.id)}>Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
};

function mapState(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {user, users};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedUsersList = connect(mapState, actionCreators)(UsersList);
export {connectedUsersList as UsersList};
