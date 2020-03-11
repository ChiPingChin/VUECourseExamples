Vue.component('my-input', {
  props: ['value'],
  template: `
    <div class="my-input">
      <input
        :value="value"
        @input="$emit('input', $event.target.value)" />
      <span>我是myinput</span>
    </div>
  `
});