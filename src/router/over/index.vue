<template>
  <div class="info">
    <div v-if="pageIndexed === 6">
      <div class="info__head">
        <h2 class="info__head__title" :class="titleState">联系我</h2>
      </div>
    </div>
  </div>n/.
</template>
<script>
  // import page1 from './../../components/page1'

  const timesObj = {}

  export default {
    created () {
      this.titleState = 'title__move'
    },
    props: {
      pageIndex: {
        type: Number,
        default: 1
      },
      isPageAnimation: {
        type: Boolean
      }
    },
    data () {
      return {
        titleState: false,
        ck1State: false,
        pageIndexed: 1
      }
    },
    methods: {
      init () {
        this.titleState = false
        this.ck1State = false
        for (let time in timesObj) {
          clearTimeout(time)
        }
        timesObj.initTime = setTimeout(() => {
          this.titleState = 'title__move'
        }, 0)
      }
    },
    watch: {
      titleState () {
        timesObj.ck1Time = setTimeout(() => {
          this.ck1State = 'ck1__move'
        }, 500)
      },
      isPageAnimation () {
        setTimeout(() => {
          this.pageIndexed = this.pageIndex
        }, 500)
      },
      pageIndexed () {
        this.init()
      }
    }
  }

</script>
<style lang=scss scoped>
  @import "./../../assets/css/mixin.scss";
  .info {
    @include full-screen;
    &__head {
      &__title {
        color: #fff;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.8rem;
        font-size: .6rem;
        transform: translate3d(0, -3rem, 0);
      }
    }
    &__ck1 {
      position: relative;
      height: 7.5rem;
      margin: 0 .2rem;
      @include flex-center;
      &__back {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: scale3d(0, 0, 1) rotate(0deg);
      }
      &__text {
        color: #fff;
        font-size: .25rem;
        text-align: center;
        padding: 0 1rem;
        opacity: 0;
        > p {
          line-height: 1.8;
        }
      }
    }
  }
  .title__move {
    animation: move .5s forwards;
  }
  @keyframes move {
    0% {
      transform: translate3d(0, -3rem, 0);
    }
    50% {
      transform: translate3d(0, .3rem, 0);
    }
    70% {
      transform: translate3d(0, -.1rem, 0);
    }
    85% {
      transform: translate3d(0, .1rem, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  .ck1__move {
    animation: ck1Move 1s forwards;
  }
  @keyframes ck1Move {
    0% {
      transform: scale3d(0, 0, 1) rotate(0deg);
    }
    100% {
      transform: scale3d(1, 1, 1) rotate(-180deg);
    }
  }
  .text__fade {
    animation: textFade 1s forwards;
  }
  @keyframes textFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
