<script>
export default {
  data: () => ({
    count: 0,
    show: true,
    list: ['1', '2', '3'],
    input: '',
  }),
  methods: {
    clickHandler() {
      this.count += 1;
      this.show = !this.show;
    },
  },
  render() {
    return (
      <section>
        <DebugComponent path="components/BasicJSX.vue" />
        <h2>{this.message}</h2>
        {/* event listeners */}
        <button onClick={this.clickHandler}>Click</button>
        {/* v-for */}
        <ul>
          {
            this.list.map((v:string) => <li key={v}>{v}</li>)
          }
        </ul>
        {/* v-if */}
        {
          this.show && <h1>h1</h1>
        }
        <div>
          <p>{this.input}</p>
          {/* v-model */}
          <input
            value={this.input}
            onInput={(e) => { this.input = e.target.value; }}
          />
        </div>
      </section>
    );
  },
};
</script>
