import './styles';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Counter } from './components/Counter';
import { Todo } from './components/todo/Todo';
import { Rest } from './components/api/Rest';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div class="container-fluid">
          {this.props.children}
        </div>
    );
  }
}

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="todo" component={Todo}/>
        <Route path="counter" component={Counter}/>
        <Route path="rest" component={Rest}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
