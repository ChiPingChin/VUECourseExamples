Vue.component('my-checkbox', {
  props: {
    value: [String, Number],
    label: String,
  },
  template: `
    <div class="check-box">
      <label>
        <input type="checkbox" 
          :value="value"
          @input="$emit('input', $event.target.checked)" />
          <span>{{label}}</span>
      </label>
    </div>
  `
});