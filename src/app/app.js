import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'app/assets/scss/now-ui-dashboard.css';
import 'app/assets/css/app.css';

import indexRoutes from 'app/routes/index.js';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            component={prop.component}
                        />
                    );
                })
            }
        </Switch>
    </Router>
    );
  }
}

export default App;



/*import React, { Component } from 'react';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">

      </div>
    );
  }
}

export default App;*/
