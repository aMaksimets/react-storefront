import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import {routes} from './routes';
import './assets/style.scss';

axios.defaults.baseURL = "http://localhost:9001/"

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => {
              return(
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App;
