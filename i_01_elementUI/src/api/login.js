import request from '@/utils/request';

export const login = (username:string, password:string) => request({
  url: '/api/login',
  method: 'post',
  data: {
    username,
    password,
  },
});

export const getInfo = (token:string) => request({
  url: '/api/me',
  method: 'post',
  data: { token },
});

export const logout = () => request({
  url: '/api/logout',
  method: 'post',
});
