import React, { Component } from 'react';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <header className={`${styles['app-header']}`}>            
            <h1 className={styles['app-title']}>{process.env.REACT_APP_TITLE}</h1>
          </header>
          <div className="container-fluid">
          site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>site content<br/>
          </div>           
        </div>
      </div>
    );
  }
}

export default App;
