import React, { Component } from 'react';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="container-fluid">
        <header className={`row ${styles['app-header']}`}>            
          <h1 className={styles['app-title']}>Welcome to {process.env.REACT_APP_TITLE}!</h1>
        </header>
           
        </div>
      </div>
    );
  }
}

export default App;
