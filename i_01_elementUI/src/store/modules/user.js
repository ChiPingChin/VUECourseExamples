import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { setToken as requestSetToken, clearToken as requestClearToken } from '../../utils/request';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
  },

  mutations: {
    SET_TOKEN: (state, token:string) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return login(username, userInfo.password).then((data) => {
        setToken(data.token);
        requestSetToken(data.token);
        commit('SET_TOKEN', data.token);
        return data;
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return getInfo(state.token).then((data) => {
        if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          commit('SET_ROLES', data.roles);
        } else {
          throw new Error('getInfo: roles must be a non-null array !');
        }
        commit('SET_NAME', data.name);
        commit('SET_AVATAR', data.avatar);
        return data;
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return logout(state.token).then(() => {
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        removeToken();
        requestClearToken();
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        removeToken();
        commit('SET_TOKEN', '');
        resolve();
      });
    },
  },
};

export default user;
