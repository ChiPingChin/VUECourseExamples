Vue.component('TodoFilters', {
  props:{
    visibility:{
      type: String,
    }
  },
  template: `
    <section data-name="TodoFilters">
      <ul class="filters">
        <li><a :class="{active:visibility==='all'}"       @click="$emit('update:visibility', 'all')">All</a></li>
        <li><a :class="{active:visibility==='active'}"    @click="$emit('update:visibility', 'active')">Active</a></li>
        <li><a :class="{active:visibility==='completed'}" @click="$emit('update:visibility', 'completed')">Completed</a></li>
      </ul>
    </section>
  `
})