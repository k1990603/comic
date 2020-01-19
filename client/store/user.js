import {SET_USERINFO, SET_TOKEN} from '@/utils/mutation-types';
const state = () => ({
  token: 1111,
  userInfo: { label: 'bobo'}
})

const mutations = {
  [SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo;
  },
  // 以下为测试数据
  [SET_TOKEN] (state, token) {
    state.token = token;
  },
};

// const getters = {
//   getUserInfo (state) { state.user.userInfo },
//   getToken (state) { state.user.token }
// };

const actions = {
  // 登录用户信息
  updateUserInfo ({commit}, data) {
    commit (SET_USERINFO, data);
  },
  // 登录用户信息
  updateToken ({commit}, data) {
    commit (SET_TOKEN, data);
  }
};

export default {
  state,
  mutations,
  // getters,
  actions
};
