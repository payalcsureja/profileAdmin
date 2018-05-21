import { Rxios } from 'rxios';
var http = new Rxios({
  // all regular axios request configuration options are valid here
  // check https://github.com/axios/axios#request-config
  baseURL: 'https://my-node-rest.herokuapp.com/api/',
});

export default http;