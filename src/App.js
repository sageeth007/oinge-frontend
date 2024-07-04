//auto gen content below
/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import RegistrationForm from './RegistrationForm'; 
import LoginForm from './LoginForm';
import './AppStyle.css';
// import './App.css';
import './style.css';
import logo from './logo.png';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/`)
  //     .then((response) => response.text())
  //     .then((message) => setMessage(message));
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>{message}</p>
  //     </header>
  //   </div>
  // );
  return (
    <div className="login-page">
      <h2>Welcome to your Entrepreneurial community</h2>
      <LoginForm />
    </div>
  );
  
  return (
    <div className="App">
      <Helmet>
        <title>User Registration</title> </Helmet>
      <RegistrationForm />
    </div>
  );
}

export default App;
