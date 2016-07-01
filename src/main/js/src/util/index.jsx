import $ from 'jquery';

export const TODOES_URI = '/api/todoes';
export const SUCCESS = 'success';

export const findAllTodoes = () => $.getJSON(TODOES_URI);
export const findAllTodoesOk = (data, status) => SUCCESS === status && data._embedded && data._embedded.todoes;
export const todoes = (data) => data._embedded.todoes;
export const fail = (xhr, status, error) => log(status, error);

export const log = (obj) => {
  console.log(JSON.stringify(obj));
};

export const pretty = (obj) => {
  console.log(JSON.stringify(obj, null, 2));
};
