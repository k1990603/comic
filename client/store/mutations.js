export const SET_USERINFO = (state, userInfo) => {
  state.userInfo = userInfo;
}

export const SET_TOKEN = (state, token) => {
  state.token = token;
}

export const SET_MANHUA = (state, manhuaDetail) => {
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
}

export const SET_CAPTER = (state, capterId) => {
  state.capterId = capterId
}