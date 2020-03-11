<script>
import CityAreaData from '../data/CityAreaData.json';

export default {
  data() {
    return {
      cityIdx: -1,
      areaIdx: -1,
    };
  },
  computed: {
    cityArr() {
      return Object.keys(CityAreaData);
    },
    areaArr() {
      if (this.cityIdx === -1) {
        return [];
      }
      const cityName = this.cityArr[this.cityIdx];
      return CityAreaData[cityName];
    },
    zip() {
      if (this.areaIdx === -1) {
        return '';
      }
      return this.areaArr[this.areaIdx].zip;
    },
  },
  watch: {
    cityIdx() {
      this.areaIdx = -1;
    },
  },
};
</script>

<template>
  <section data-name="RegionSelectHomework.vue">
    <div>
      <label>縣市</label>
      <p>{{ cityIdx }}</p>
      <select v-model="cityIdx">
        <option
          v-if="cityIdx === -1"
          value="-1"
          disabled
        >
          請選擇縣市
        </option>
        <option
          v-for="(cityName,index) in cityArr"
          :key="cityName"
          :value="index"
        >
          {{ cityName }}
        </option>
      </select>
    </div>
    <br>
    <div>
      <label>地區</label>
      <p>{{ areaIdx }}</p>
      <select v-model="areaIdx">
        <option
          v-if="areaIdx === -1"
          value="-1"
          disabled
        >
          請選擇地區
        </option>
        <option
          v-for="(o,index) in areaArr"
          :key="o.name"
          :value="index"
        >
          {{ o.name }}
        </option>
      </select>
    </div>
    <div>
      <label>Zip</label>
      <p>{{ zip }}</p>
    </div>
  </section>
</template>
