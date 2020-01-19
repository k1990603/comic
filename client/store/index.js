import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use (Vuex);

export default () => {
  return new Vuex.Store ({
    state,
    mutations,
    actions
  //   strict: debug,
  //   plugins: [
  //   createPersistedState({
  //     storage: window.sessionStorage
  //   })
  // ]
  });
}
