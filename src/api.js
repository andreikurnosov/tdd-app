import axios from 'axios';
import httpAdater from 'axios/lib/adapters/http';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  adapter: httpAdater
});

export default {
  searchUser(username) {
    return instance.get(`/users/${username}`).then(result => result.data);
  }
};
