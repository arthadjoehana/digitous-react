import React from 'react';
import './App.css';
import users from'./users.json'
import UserInfo from './component/UserInfo';

class App extends React.Component {

  render () {
    return (
      <div>
        {users.map((user) =>(
      <UserInfo name={user.name} email={user.email} website={user.website} />
    ))}
      </div>
    )
  }
}

export default App;
