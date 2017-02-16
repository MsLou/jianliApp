<template>
  <div class="info">
    <div v-if="isPage">
      <div class="info__head">
        <h2 class="info__head__title title--move">项目经历</h2>
      </div>
      <div class="info__projects">
        <div class="info__projects__pro pro--rotateX">
          <p>
            <span>项目名称:</span>
            <span>成长+</span>
          </p>
          <p>
            <span>项目简介:</span>
            <span>一个母婴教育app，帮助家长找到最优质的成长服务资源，满足子成长过程中的教育、健康、升学、游乐等需求，提供一体化的玩、教、学服务。</span>
          </p>
          <p>
            <span>所在公司:</span>
            <span>孩子王中国有限公司</span>
          </p>
          <p class="pro__line pro__line--fir"></p>
        </div>
        <div class="info__projects__pro pro2--rotateX">
          <p>
            <span>项目名称:</span>
            <span>o2o微商城</span>
          </p>
          <p>
            <span>项目简介:</span>
            <span>商城app</span>
          </p>
          <p>
            <span>所在公司:</span>
            <span>江苏创纪云网络科技有限公司</span>
          </p>
          <p class="pro__line pro__line--suc"></p>
        </div>
        <div class="info__projects__pro pro3--rotateX">
          <p>
            <span>项目名称:</span>
            <span>组织中心、类目中心</span>
          </p>
          <p>
            <span>项目简介:</span>
            <span>后台大型管理系统</span>
          </p>
          <p>
            <span>所在公司:</span>
            <span>江苏创纪云网络科技有限公司</span>
          </p>
          <p class="pro__line pro__line--thr"></p>
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
          if (this.pageIndex === 5) {
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
    &__projects {
      position: absolute;
      @include flex-center;
      flex-direction: column;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .pro--rotateX {
        animation-delay: .5s !important;
        transform: rotateY(90deg);
        animation: proRotateX .5s forwards;
      }
      .pro2--rotateX {
        animation-delay: 1s !important;
        transform: rotateY(90deg);
        animation: proRotateX .5s forwards;
      }
      .pro3--rotateX {
        animation-delay: 1.5s !important;
        transform: rotateY(90deg);
        animation: proRotateX .5s forwards;
      }
      &__pro {
        padding-bottom: .2rem;
        margin-bottom: .2rem;
        position: relative;
        & > p {
          display: flex;
          align-items: center;
          & > span:nth-child(1) {
            width: 1.4rem;
          }
          & > span:nth-child(2) {
            width: 5.5rem;
          }
          &.pro__line {
            height: 1px;
            background-color: #ddd;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            @mixin line {
              width: 0;
              animation: widthMove .5s forwards;
            }
            &--fir {
              @include line;
              animation-delay: 1s;
            }
            &--suc {
              @include line;
              animation-delay: 1.5s;
            }
            &--thr {
              @include line;
              animation-delay: 2s;
            }
          }
          span {
            color: #ddd;
            font-size: .3rem;
          }
        }
      }
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
  @keyframes proRotateX {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  @keyframes widthMove {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
</style>
