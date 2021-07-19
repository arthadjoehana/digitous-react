import React from 'react';
import './App.css';
import users from'./users.json'
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';

const listOfUsers = [users[0]]

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      count: 1
    };

    

  }
  addFunction=()=> {
    if (this.state.count < users.length) {
      this.setState({
        count: this.state.count+1
        
      })
      listOfUsers.push(users[this.state.count])
      console.log(listOfUsers)
    }
  }
  substractFunction=()=> {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count-1
      })
      listOfUsers.pop()
      console.log(listOfUsers)
    }
  }


  render () {
    return (
      <div className="app">
        <div>
          <h1>Counter</h1>
          <Counter count={this.state.count} addFunction={this.addFunction} substractFunction={this.substractFunction} />
        </div>
        <div>
          {listOfUsers.map((user) =>(
            <UserInfo key={user.id} username={user.username} name={user.name} email={user.email} website={user.website} />
        ))}
        </div>

      </div>
      

    )
  }
}

export default App;
