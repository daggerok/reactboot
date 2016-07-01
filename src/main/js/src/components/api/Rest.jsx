import React from 'react';

import { Navbar } from '../Navbar';

import {
  findAllTodoes,
  findAllTodoesOk,
  todoes,
  fail
} from '../../util';

export class Rest extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.reRender = this.reRender.bind(this);
    this.cover = 'in progres..';
    this.state = {
      todoes: [],
      details: this.cover
    };
  }

  update() {
    return findAllTodoes()
      .then(this.reRender)
      .fail(fail);
  }

  reRender(data, status) {
    if (findAllTodoesOk(data, status)) {
      this.setState({
        ...this.state,
        todoes: todoes(data)
      });
    }
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Navbar/>
        <h4>REST api todos</h4>
        <button onClick={this.update}
                class="btn btn-primary">find all</button>
        <ul style={{ listStyle: 'none' }}>
          {this.state.todoes.map((todo, index) =>
            <li key={index}>
              <span>{todo.id}) {todo.text}</span>{' '}
              <span>{todo.completed ? 'done.' : todo.uid}</span>{' '}
              <span class="text-muted">{this.state.details}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
/*
const api = {
  "uid": "5775c272691a653d68d595d8",
  "id": 1,
  "text": "1",
  "completed": false,
  "_links": {
    "self": {
      "href": "http://localhost:8080/api/todoes/5775c272691a653d68d595d8"
    },
    "todo": {
      "href": "http://localhost:8080/api/todoes/5775c272691a653d68d595d8"
    }
  }
};
*/
