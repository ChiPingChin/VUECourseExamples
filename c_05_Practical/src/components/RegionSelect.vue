<script>
import CityAreaData from '../data/CityAreaData.json';

export default {
  data() {
    return {
      cityIdx: 0,
      areaIdx: 0,
    };
  },
  computed: {
    cityArr() {
      return Object.keys(CityAreaData);
    },
    areaArr() {
      const cityName = this.cityArr[this.cityIdx];
      return CityAreaData[cityName];
    },
    zip() {
      return this.areaArr[this.areaIdx].zip;
    },
  },
};
</script>

<template>
  <section data-name="RegionSelect.vue">
    <div>
      <label>縣市</label>
      <p>{{ cityIdx }}</p>
      <select v-model="cityIdx">
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
