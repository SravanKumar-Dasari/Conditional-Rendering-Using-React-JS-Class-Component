import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'
/*
//Using If...Else Statements
// adding logic inside the function ---
class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

// Using Element Variable
// adding logic inside render() ---
class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton}
      </div>
    )
  }
}

// Using Ternary Operators
// adding logic inside render() ---
class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}
*/

// Using Logical && Operator
// adding logic inside render() ---

class App extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
