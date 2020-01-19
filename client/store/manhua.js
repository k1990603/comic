import { SET_MANHUA, SET_CAPTER } from '@/utils/mutation-types';
const state = ()=> ({
    manhuaDetail: {
      id: null,
      desc: null,
      picture: null,
      title: null,
      rq: null,
      type: null,
      updateDesc: null,
      resource: null,
    },
    capterId: null
  })

const mutations = {
  [SET_MANHUA] (state, manhuaDetail) {
    state.manhuaDetail = {
      id: null,
      desc: null,
      picture: null,
      title: null,
      rq: null,
      type: null,
      updateDesc: null,
      resource: null
    }
    state.manhuaDetail.id = manhuaDetail.id;
    state.manhuaDetail.desc = manhuaDetail.desc_str;
    state.manhuaDetail.picture = manhuaDetail.picture;
    state.manhuaDetail.title = manhuaDetail.title;
    state.manhuaDetail.rq = manhuaDetail.rq;
    state.manhuaDetail.type = manhuaDetail.type_str;
    state.manhuaDetail.updateDesc = manhuaDetail.update_desc;
    state.manhuaDetail.resource = manhuaDetail.resource_str;
  },
  [SET_CAPTER] (state, capterId) {
    state.capterId = capterId
  }
};

// const getters = {
//   getManhua (state) { return state.manhua.manhuaDetail },
//   getCapter (state) { return state.manhua.capterId }
// }

const actions = {
  // 登录用户信息
  updateManhua ({commit}, data) {
    commit (SET_MANHUA, data);
  },
  // 登录用户信息
  updateCapter ({commit}, data) {
    commit (SET_CAPTER, data);
  }
}

export default {
  state,
  mutations,
  // getters,
  actions
};
