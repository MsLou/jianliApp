<template>
  <div class="load" ref="load" v-if="isExist" :class="loadClass">
    <div class="load__list">
      <div class="load__list__line load__list__line--l1"></div>
      <div class="load__list__line load__list__line--l2"></div>
      <div class="load__list__line load__list__line--l3"></div>
      <div class="load__list__line load__list__line--l4"></div>
      <div class="load__list__line load__list__line--l5"></div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
    },
    props: {
      show: {
        type: Boolean,
        default: true
      },
      setIndex: {
        type: Function
      }
    },
    data () {
      return {
        isExist: true
      }
    },
    computed: {
      loadClass () {
        return this.show ? '' : 'hide'
      }
    },
    watch: {
      loadClass (val) {
        setTimeout(() => {
          this.isExist = false
          this.setIndex(1)
        }, 300)
      }
    }
  }
</script>
<style scoped lang=scss>
  @import './../../assets/css/mixin.scss';
  .load {
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10001;
    background-color: #000;
    &__list {
      display: flex;
      &__line {
        height: 1rem;
        width: 5px;
        background-color: #67CF22;
        margin-left: .1rem;
        animation: scaleY 1.2s infinite;
        transform: scaleY(0.4)
        &--l1 {
        }
        &--l2 {
          animation-delay: -1.1s;
        }
        &--l3 {
          animation-delay: -1.0s;
        }
        &--l4 {
          animation-delay: -0.9s;
        }
        &--l5 {
          animation-delay: -0.8s;
        }
      }
    }
  }
  @keyframes scaleY {
    0%, 40%, 100% { transform: scaleY(0.4) }
    20% { transform: scaleY(1.0) }
  }
  .hide {
    animation: fade-hide .3s forwards;
  }
  @keyframes fade-hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .show {
    animation: fade-show .3s forwards;
  }
  @keyframes fade-show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
