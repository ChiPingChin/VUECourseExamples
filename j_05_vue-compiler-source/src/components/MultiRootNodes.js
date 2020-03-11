// https://vuejs.org/v2/guide/render-function.html#Functional-Components


export default {
  functional: true,
  render(h, { scopedSlots }) {
    const slotNode = scopedSlots.default({
      data: 'testData',
    });
    return slotNode;
  },
};
