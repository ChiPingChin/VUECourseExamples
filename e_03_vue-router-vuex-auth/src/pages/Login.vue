<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions(['login']),
    submitHandler() {
      const { email, password } = this;
      this.login({ email, password }).then((result) => {
        if (result) {
          this.$router.replace('/');
        }
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-block">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="email"
            class="form-control"
            type="email"
          >
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            class="form-control"
            type="password"
          >
        </div>
        <button
          class="btn btn-primary"
          @click="submitHandler"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
