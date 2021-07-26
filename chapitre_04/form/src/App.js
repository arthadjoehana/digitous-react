import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      checkbox : '',
      isValidEmail: false,
      isValidPassword: false,
      isSubmitted : false
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
    this.setState((prevState) => {
      return {
        ...prevState,
        password: e.target.value
      };
    });  
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
  onCheckboxChange=(e)=>{
    this.setState((prevState) => {
      return {
        ...prevState,
        checkbox : e.target.value
      };
    });  
  }
  onSubmit=(e)=> {
    e.preventDefault();
    if(this.state.isValidPassword ===true &&this.state.isValidEmail===true){
      this.setState((prevState) => {
        return {
          ...prevState,
          isSubmitted : true
        };
      });
  }
}
  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div>
          FORM SUBMITTED
        </div>
      )
    } else {
      return (
        <div>
          <form>
          <div className="form-group input-group-prepend">
            <label for="validationSuccess" className="form-label text-success" >Email address</label>
            <input type="email" className={this.state.isValidEmail ? "is-valid form-control" : "is-invalid form-control"} id="validationSucess" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className= {this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onPasswordChange}/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.oncheckboxChange} />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
          </form>
        </div>
      );
    }
    
  }
}

export default App;