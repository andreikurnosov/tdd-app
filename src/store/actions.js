/* eslint-disable */

import api from '@/api';

export default {
  SEARCH_USER({ commit }, { username }) {
    return new Promise(async (res, rej) => {
      try {
        const user = await api.searchUser(username);
        commit('SET_USER', user);
        res(user);
      } catch (error) {
        rej(error);
      }
    });
  }
};
