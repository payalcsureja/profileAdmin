import { Component } from 'react';
import { setIdToken, setAccessToken } from 'app/auth/authService';

class Callback extends Component {

//   constructor() {
//     super()
//   }

  componentDidMount() {  
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {  
    return null;
  }
}

export default Callback;