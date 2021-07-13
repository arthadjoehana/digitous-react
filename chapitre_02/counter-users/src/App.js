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
      listOfUsers.pop(users[this.state.count])
      console.log(listOfUsers)
    }
  }


  render () {
    return (
      <div>
        <div>
          <h1>Counter</h1>
          <Counter count={this.state.count} addFunction={this.addFunction} substractFunction={this.substractFunction} />
        </div>
        <div>
          <p></p>
          {listOfUsers.map((user) =>(
            <UserInfo name={user.name} />
        ))}
        </div>

      </div>
      

    )
  }
}

export default App;
