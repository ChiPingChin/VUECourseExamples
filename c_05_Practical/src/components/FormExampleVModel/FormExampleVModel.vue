<script>
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormRadio from './FormRadio.vue';
import FormCheckbox from './FormCheckbox.vue';

export default {
  components: {
    FormInput,
    FormSelect,
    FormRadio,
    FormCheckbox,
  },
  data() {
    return {
      loading: false,
      warningMessage: '',
      formInput: '',
      formSelect: '',
      formRadio: '',
      formCheckbox: ['學會Vue'],
    };
  },
  methods: {
    submitHandler() {
      const {
        formInput, formSelect, formRadio, formCheckbox,
      } = this;
      const errorMSG = [];
      if (!formInput) {
        errorMSG.push('請輸入姓名');
      }
      if (!formSelect) {
        errorMSG.push('請選擇地區');
      }
      if (!formRadio) {
        errorMSG.push('請選擇性別');
      }
      if (formCheckbox.length === 0) {
        errorMSG.push('請選擇Checkbox');
      }
      if (errorMSG.length > 0) {
        this.warningMessage = errorMSG.toString();
        return;
      }
      this.loading = true;
      this.warningMessage = '';
      // 模擬 http POST
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<template>
  <section
    data-name="FormExampleVModel.vue"
    class="form-example"
    :class="{loading}"
  >
    <h2>FormExample vmodel</h2>
    <div class="error">
      {{ warningMessage }}
    </div>
    <form @submit.prevent="submitHandler">
      <FormInput v-model="formInput" />
      <FormSelect v-model="formSelect" />
      <FormRadio v-model="formRadio" />
      <FormCheckbox v-model="formCheckbox" />
      <div class="block">
        <input
          type="submit"
          value="Submit"
        >
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
.error{
  color: red;
}
</style>
