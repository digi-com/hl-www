<template>
  <vue100vh :css="{ height: '100rvh' }" class="video-modal">
    <div
      @click="closeClicked()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="video-modal-close-button"
    >
      CLOSE
    </div>
    <div class="video-modal-content">
      <client-only>
        <vimeo-player
          ref="player"
          :video-id="videoId"
          :autoplay="playing"
          :loop="true"
          :controls="false"
          :player-width="windowWidth - (windowWidth / 100) * 2.5"
          :player-height="windowHeight - (windowHeight / 100) * 33"
          class="video-modal-player"
        />
      </client-only>
      <div class="video-modal-spinner half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
    <div
      v-if="playing === false"
      @click="play()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="video-modal-play-button"
    >
      PLAY
    </div>
    <div
      v-if="playing === true"
      @click="pause()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="video-modal-play-button"
    >
      PAUSE
    </div>
    <div
      v-if="muted === false"
      @click="mute()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="video-modal-mute-button"
    >
      MUTE
    </div>
    <div
      v-if="muted === true"
      @click="unmute()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="video-modal-mute-button"
    >
      UNMUTE
    </div>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'

export default {
  components: {
    vue100vh
  },
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      playing: true,
      muted: false,
      windowWidth: 0,
      windowHeight: 0,
      txt: ''
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.txt = `width changed to ${newWidth} from ${oldWidth}`
    },
    windowHeight(newHeight, oldHeight) {
      this.txt = `height changed to ${newHeight} from ${oldHeight}`
    }
  },
  beforeMount() {
    if (process.browser) {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    pointerEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    pointerExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    closeClicked() {
      this.$emit('close-clicked')
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    play() {
      this.playing = true
      this.$refs.player.play()
    },
    pause() {
      this.playing = false
      this.$refs.player.pause()
    },
    mute() {
      this.muted = true
      this.$refs.player.mute()
    },
    unmute() {
      this.muted = false
      this.$refs.player.unmute()
    },
    onResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style scoped>
.video-modal {
  position: fixed;
  background: black;
  top: 0;
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  z-index: 99999999;
}
.video-modal-content {
  grid-column: 1 / 13;
  align-self: center;
  justify-self: center;
  position: relative;
  max-width: 100%;
}
.video-modal-content::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  z-index: 3;
}
.video-modal-content .video-modal-player {
  position: relative;
  z-index: 2;
  max-width: 100%;
}
.video-modal-content .video-modal-spinner {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  z-index: 1;
}
.video-modal-content .video-modal-spinner .circle.circle-1 {
  border-top-color: #fff;
  animation: half-circle-spinner-animation 1s infinite;
}
.video-modal-content .video-modal-spinner .circle.circle-2 {
  border-bottom-color: #fff;
  animation: half-circle-spinner-animation 1s infinite alternate;
}
.video-modal-play-button,
.video-modal-mute-button,
.video-modal-close-button {
  color: white;
  font-size: 1.5625vw;
  line-height: 1;
  letter-spacing: 0.015vw;
  text-transform: uppercase;
  user-select: none;
  padding: 2.5vw;
}
.video-modal-play-button {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 8.5vw;
}
.video-modal-mute-button {
  position: absolute;
  bottom: 0;
  left: 8.5vw;
  width: 10vw;
}
.video-modal-close-button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 1279px) {
  .video-modal {
    position: fixed;
    background: black;
    top: 0;
    width: 100%;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.625vw;
    z-index: 99999999;
  }
  .video-modal-play-button,
  .video-modal-mute-button,
  .video-modal-close-button {
    font-size: 20px;
    letter-spacing: 0.2px;
    padding: 24px;
  }
  .video-modal-play-button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
  }
  .video-modal-mute-button {
    position: absolute;
    bottom: 0;
    left: 100px;
    width: 120px;
  }
  .video-modal-close-button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;
  }
}

@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
}
@media screen and (min-width: 376px) and (max-width: 480px) {
}
@media screen and (min-width: 481px) and (max-width: 767px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
}
@media screen and (min-width: 2561px) and (max-width: 9999px) {
}
</style>
