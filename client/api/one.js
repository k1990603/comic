import api from '../utils/apiUtils';

export function login (params) {
  return api.postForm ('/auth/sys/login', params);
}

// 分页
export function getManhuaList (params) {
  return api.get ('/api/manhua', params);
}

// 详情
export function manhuaDetail (params) {
  return api.get ('/api/detail', params);
}

// 详情
export function getChapter (params) {
  return api.get ('/api/queryCapter', params);
}
