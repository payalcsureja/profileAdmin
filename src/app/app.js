import React, { Component } from 'react';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          {/* <header className={`row ${styles['app-header']}`}>            
            <h1 className={styles['app-title']}>Welcome to {process.env.REACT_APP_TITLE}!</h1>
          </header> */}
          <nav className={`navbar navbar-dark ${styles['app-side-navbar']} ${styles['app-navbar']} ${styles['app-navbar-expand-lg']} ${styles['app-fixed-top']}`}  >
            sidebar content
          </nav>
          <div class="container-fluid">
          site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>
          </div>           
        </div>
      </div>
    );
  }
}

export default App;
