import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeName, restoreName } from './actionTypes/action';
import { getUsersApiCall } from './apicalls/users';

class App extends React.Component {

  componentDidMount = () => {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;

    const items = users.map((user, key) =>
      <li style={{ marginBottom: "0.5%" }} key={user.id}>{user.name} <br/><i style={{ color: "#999999", fontSize: "0.5rem" }}>{user.email}</i></li>
    );

    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.changeName}>Change Name</button>
        <button onClick={this.props.restoreName}>Restore Name</button>
        <hr />
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.nameReducer.name,
    users: state.userReducer.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => dispatch(changeName('Partone')),
    restoreName: () => dispatch(restoreName('Carlos')),
    getUsers: () => getUsersApiCall(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
