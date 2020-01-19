// 登录用户信息
export const updateUserInfo = async ({commit}, data) => {
  await commit ('SET_USERINFO', data);
};

// 登录用户信息
export const updateToken = async ({commit}, data) => {
  await commit ('SET_TOKEN', data);
};

// 漫画
export const updateManhua = async ({commit}, data) => {
  await commit ('SET_MANHUA', data);
};

// 漫画章节id
export const updateCapter = async ({commit}, data) => {
  await commit ('SET_CAPTER', data);
};

