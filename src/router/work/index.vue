<template>
  <div class="info">
    <div v-if="isPage">
      <div class="info__head">
        <h2 class="info__head__title title__move">工作经历</h2>
      </div>
      <div class="info__work">
        <div class="info__work__ck work1 ck-animation">
          <div class="info__work__ck__title">
            <p>2016年6月</p>
            <p>至今</p>
          </div>
          <div class="info__work__ck__content">
            <p>
              <span>名称:</span>
              <span>孩子王中国有限公司</span>
            </p>
            <p>
              <span>规模:</span>
              <span>3000-4000</span>
            </p>
            <p>
              <span>职位:</span>
              <span>前端工程师</span>
            </p>
          </div>
        </div>
        <div class="info__work__ck work2  ck-animation">
          <div class="info__work__ck__title">
            <p>2015年4月</p>
            <p>2016年5月</p>
          </div>
          <div class="info__work__ck__content">
            <p>
              <span>名称:</span>
              <span>江苏创纪云网络科技有限公司</span>
            </p>
            <p>
              <span>规模:</span>
              <span>100-200</span>
            </p>
            <p>
              <span>职位:</span>
              <span>前端工程师</span>
            </p>
          </div>
        </div>
        <div class="info__work__ck work3  ck-animation">
          <div class="info__work__ck__title">
            <p>2014年7月</p>
            <p>2015年4月</p>
          </div>
          <div class="info__work__ck__content">
            <p>
              <span>名称:</span>
              <span>南京宠儿香网络科技有限公司</span>
            </p>
            <p>
              <span>规模:</span>
              <span>10-50</span>
            </p>
            <p>
              <span>职位:</span>
              <span>前端工程师</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>n/.
</template>
<script>
  // import page1 from './../../components/page1'

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
          if (this.pageIndex === 4) {
            this.isPage = true
          } else {
            this.isPage = false
          }
        }
      },
      pageIndex (val) {
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
    &__work {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      @include flex-center;
      flex-direction: column;
      &__ck {
        @include flex-center;
        margin-bottom: .2rem;
        transform-origin: -100px -100px;
        transform: rotate(-180deg);
        color: #ddd;
        font-size: .3rem;
        &__title {
          margin-right: .2rem;
          text-align: center;
        }
        &__content {
          width: 5rem;
          & > p {
            display: flex;
            & > span:nth-child(1) {
              margin-right: .1rem;
              width: .7rem;
            }
            & > span:nth-child(2) {
              width: 4rem;
            }
          }
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
  .ck__move {
    animation: ckMove 1s forwards;
  }
  @keyframes ckMove {
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
  .ck-animation {
    animation: ck-animation .5s forwards;
  }
  .work1 {
    animation-delay: .5s;
  }
  .work2 {
    animation-delay: .8s;
  }
  .work3 {
    animation-delay: 1.1s;
  }
  @keyframes ck-animation {
    0% {
      transform-origin: -100px -100px;
      transform: rotate(-180deg);
      opacity: 0;
    }
    100% {
      transform-origin: 0 0;
      transform: rotate(0deg);
      opacity: 1;
    }
  }
</style>
