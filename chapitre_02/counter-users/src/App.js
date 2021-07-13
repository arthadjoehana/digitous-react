import React from 'react';
import './App.css';
import users from'./users.json'
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';

const listOfUsers = []

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      count: 0
    };

    

  }
  addFunction=()=> {
    this.setState({
      count: this.state.count+1
    })
    const num = this.state.count+1
    console.log("count :", num)
    listOfUsers.push(users[num])
    console.log(listOfUsers)
  }
  substractFunction=()=> {
    if (this.state.count >0 ) {
      this.setState({
        count: this.state.count-1
      })
      const num = this.state.count-1
      console.log("count :", num)
      listOfUsers.pop(users[num])
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
