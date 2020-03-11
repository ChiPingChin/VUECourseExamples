<script>

import Permission from './Permission.vue';
import PermissionJSX from './PermissionJSX';
import BasicJSX from './BasicJSX.vue';
import CustomTag from './CustomTag.vue';
import CustomTagJSX from './CustomTagJSX.vue';
import CustomTagRF from './CustomTagRF.vue';

export default {
  components: {
    BasicJSX,
    CustomTag,
    CustomTagJSX,
    CustomTagRF,
    Permission,
    PermissionJSX,
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <BasicJSX />

      <CustomTag :level="2">
        我是CustomTag
      </CustomTag>

      <CustomTagJSX :level="3">
        CustomTagJSX
      </CustomTagJSX>

      <CustomTagRF>CustomTagRF</CustomTagRF>

      <section data-name="permission">
        <Permission :permission-code="1">
          <h4>Vue Template 寫法，但會多一層空的 div</h4>
        </Permission>
        <Permission :permission-code="0">
          <h4>你沒有權限喔, 所以看不到這裡的文字</h4>
        </Permission>
        <PermissionJSX :permission-code="1">
          <h4>JSX 寫法，不會多一層空的 div</h4>
        </PermissionJSX>
      </section>
    </div>
  </div>
</template>
