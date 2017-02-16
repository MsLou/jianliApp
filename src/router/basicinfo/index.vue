<template>
  <div class="info">
    <div v-if="isPage && !isLoadingShow">
      <div class="info__head">
        <h2 class="info__head__title title--move">我的简历</h2>
      </div>
      <div class="info__body__portrait">
        <div class="info__body__portrait__pic pic--scale">
          <img src="./../../assets/img/photo2.jpg" alt="">
        </div>
      </div>
      <div class="info__body body--rotate">
        <p>生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵。</p>
        <p>我叫罗旭东</p>
        <p>22岁</p>
        <p>一名前端工程师</p>
        <p>18550661223</p>
        <p>lxd2017w@163.com</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      pageIndex: {
        type: Number
      },
      isLoadingShow: {
        type: Boolean
      },
      isPageAnimation: {
        type: Boolean
      }
    },
    data () {
      return {
        isPage: true
      }
    },
    watch: {
      isPageAnimation (val) {
        if (val) {
          if (this.pageIndex === 1) {
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
    &__body {
      transform: translate3d(9rem, 0, 0);
      margin-top: .8rem;
      > p {
        color: #f1e5e5;
        font-size: .25rem;
        line-height: 1.4;
        text-align: center;
        margin-bottom: .2rem;
      }
      &__portrait {
        margin-top: .2rem;
        @include flex-center;
        &__pic {
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          transform: scale(0, 0);
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
  .pic--scale {
    animation:  picScale .5s forwards;
    animation-delay: .8s;
  }
  @keyframes picScale {
    0% {
      transform: scale3d(0, 0, 0);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  .body--rotate {
    animation:  bodyRotate .5s forwards;
    animation-delay: 1.3s;
  }
  @keyframes bodyRotate {
    0% {
      transform: translate3d(9rem, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
