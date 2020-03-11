<script>
export default {
  computed: {
    iframeUrl() {
      return `http://www.youtube.com/embed/${this.$route.params.id}`;
    },
  },
  methods: {
    overlayClickHandler() {
      console.log('overlayClickHandler');
      this.$router.push('/video');
    },
  },
};
</script>

<template>
  <div class="overlay">
    <div
      class="overlay-content"
      @click.self="overlayClickHandler"
    >
      <div class="video-wrapper">
        <div class="video-container">
          <iframe
            :src="iframeUrl"
            title="vid"
            width="720"
            height="480"
            frameborder="0"
          />
        </div>
      </div>
      <router-link
        class="closer"
        to="/vid"
      >
        x
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
%absolute100{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.overlay {
  @extend %absolute100;
  position: fixed;
  background-color: rgba(0,0,0,.75);
  z-index: 100;
  .overlay-content {
    @extend %absolute100;
    text-align: center;
    background-color: #ff000066;
    &:before{
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  .video-wrapper{
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    max-width: 85%;
    border: 1px solid #b366ff;
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 25px;
      height: 0;
      width: 100%;
      iframe {
        border: 0;
        @extend %absolute100;
      }
    }
  }
  .closer{
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 30px;
    border: 2px solid white;
    border-radius: 20px;
    text-align: center;
    right: 20px;
    top: 20px;
    font-size: 40px;
    text-decoration: none;
    color: white;
    &:hover{
     background-color: rgba(255,255,255,.5);
    }
  }
}
</style>
