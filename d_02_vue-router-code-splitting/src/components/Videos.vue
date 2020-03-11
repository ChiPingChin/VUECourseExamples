<script>
export default {
  data() {
    return {
      boxes: [
        { vid: '9NsTQiA7-BE', img: require('img/pic01.jpg') },
        { vid: 'rxYgbKFr2iw', img: require('img/pic02.jpg') },
        { vid: 'oUipiVwEUrI', img: require('img/pic03.jpg') },
        { vid: 'Ghrk0tVwx14', img: require('img/pic04.jpg') },
        { vid: 'gf0fLrzchBk', img: require('img/pic05.jpg') },
        { vid: 'pAyMDW2we1s', img: require('img/pic06.jpg') },
      ],
    };
  },
};
</script>

<template>
  <div class="videos-root">
    <div class="row">
      <div
        v-for="o in boxes"
        :key="o.vid"
        class="col-6 box"
      >
        <router-link
          class="image"
          :to="'/video/'+o.vid"
        >
          <img :src="o.img">
        </router-link>
        <div class="inner">
          <h3>Video Title</h3>
          <router-link
            class="btn btn-primary fit"
            :to="'/video/'+o.vid"
          >
            Watch
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.box {
  margin-bottom: 40px;
  img{
    width: 100%;
    height: auto;
  }
  a.fit {
    width: 100%;
  }
}
</style>
