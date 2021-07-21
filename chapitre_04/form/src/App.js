import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      isValidEmail: false,
      isValidPassword: false,
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }
  onEmailChange(e) {
 
    this.setState((prevState) => {
      return {
        ...prevState,
        email: e.target.value
      };
    });
    const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email_validator_regex(e.target.value)){
      this.setState((prevState) => {
        return {
          ...prevState,
          isValidEmail: true
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isValidEmail: false
        };
      });
    }
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
    if (e.target.value.length >= 6) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isValidPassword: true
        };
      });  
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isValidPassword: false
        };
      });
    }
  }
  render() {
    return (
      <form>
        <div className="form-group row d-flex p-2 bd-highlight d-flex justify-content-center">
          <div className="col-sm-12">
            <label for="inputEmail" className="col-sm-12 col-form-label">Email</label>
            <input type="text" className={this.state.isValidEmail ? "is-valid form-control": "is-invalid form-control"} id="inputEmail" placeholder="your password" value={this.state.email} onChange={this.onEmailChange} />
          </div>
        </div>
        <div className="form-group row d-flex p-2 bd-highlight d-flex justify-content-center">
          <div className="col-sm-12">
            <label for="inputPassword" className="col-sm-12 col-form-label">Password</label>
            <input type="password" className={this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    );
  }
}

export default App;