import Mock from 'mockjs';
import login from './login';
import list from './list';


Mock.mock(/\/api\/login/, 'post', login.loginByUsername);
Mock.mock(/\/api\/logout/, 'post', login.logout);
Mock.mock(/\/api\/me/, 'post', login.getUserInfo);
Mock.mock(/\/api\/list/, 'get', list.getList);

export default Mock;
