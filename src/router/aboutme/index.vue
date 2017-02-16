<template>
  <div class="info">
    <div v-if="isPage">
      <div class="info__head">
        <h2 class="info__head__title title--move">关于我</h2>
      </div>
      <div class="info__ck">
        <div class="info__ck__text">
          <p class="left-move">2014年毕业，工作近三年</p>
          <p class="right-move">目前在职，就职于孩子王中国有限公司</p>
          <p class="down-jump">期望工作地点在深圳广州</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
        isPage: false
      }
    },
    watch: {
      isPageAnimation (val) {
        if (val) {
          if (this.pageIndex === 2) {
            this.isPage = true
          } else {
            this.isPage = false
          }
        }
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
    &__ck {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @include flex-center;
      &__text {
        color: #fff;
        font-size: .3rem;
        text-align: center;
        width: 100%;
        > p {
          padding: 0 .4rem;
          line-height: 1.8;
        }
        .left-move {
          transform: translate3d(-100%, 0, 0);
          animation: leftMove .4s forwards;
          animation-delay: .5s;
        }
        .right-move {
          transform: translate3d(100%, 0, 0);
          animation: rightMove .4s forwards;
          animation-delay: 1s;
        }
        .down-jump {
          opacity: 0;
          animation: downJump .6s forwards ease-in;
          animation-delay: 1.4s;
        }
      }
    }
  }
  @keyframes leftMove {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes rightMove {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes downJump {
    0% {
      opacity: 0;
      transform: translate3d(-1.5rem, -.8rem, 0);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, -1.3rem, 0);
    }
    80% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    90% {
      opacity: 1;
      transform: translate3d(0, -.2rem, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .title--move {
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
  .ck--move {
    transform: scale3d(0, 0, 1) rotate(0deg);
    animation: ck1Move 1s forwards;
    animation-delay: .5s;
  }
  @keyframes ck1Move {
    0% {
      transform: scale3d(0, 0, 1) rotate(0deg);
    }
    100% {
      transform: scale3d(1, 1, 1) rotate(-180deg);
    }
  }
  .text--fade {
    opacity: 0;
    animation: textFade 1s forwards;
    animation-delay: 1s;
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
