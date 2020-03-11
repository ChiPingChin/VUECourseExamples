import request from '@/utils/request';

export const getList = params => request({
  url: '/api/list',
  method: 'get',
  params,
});
