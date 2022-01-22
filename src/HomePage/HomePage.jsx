import { connect } from 'react-redux';


const HomePage = (props) => {
    return <div>Hello world! HomePage</div>;
};

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionUsers = {}

const connectedHomePage = connect(mapState, actionUsers)(HomePage);
export { connectedHomePage as HomePage };
