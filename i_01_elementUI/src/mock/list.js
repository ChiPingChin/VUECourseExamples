
import Mock, { Random } from 'mockjs';


export default {
  getList() {
    return {
      items: Array.from(Array(50).keys()).map(() => Mock.mock({
        index: '@increment',
        author: '@first',
        reviewer: '@first',
        title: '@title(5, 10)',
        pageviews: '@integer(1, 999)',
        display_time: new Date(),
        status: ['published', 'draft', 'deleted'][Random.integer(0, 2)],
      })),
    };
  },
};
