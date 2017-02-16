<template>
  <div class="next" ref="next_el">
    <img src="./../../assets/img/jt.png" alt="">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pageIndex: 0,
        fullHeight: document.documentElement.getBoundingClientRect().height
      }
    },
    mounted () {
      const target = this.$refs.next_el
      this.init(target)
    },
    methods: {
      init (target) {
        let startInfo = {
          y: 0,
          currentDate: '0'
        }
        let endInfo = {
          y: 0,
          isSetIndex: false,
          position: false
        }
        target.addEventListener('touchstart', (e) => {
          startInfo = this.$touchstart(e)
        }, false)
        target.addEventListener('touchmove', (e) => {
          endInfo = this.$touchmove(e, startInfo.y, this.pageIndex, endInfo.isSetIndex)
        }, false)
        target.addEventListener('touchend', (e) => {
          this.setPageAnimation(false)
          endInfo.isSetIndex = false
          this.$touchend(endInfo.y, startInfo.currentDate, endInfo.position, endInfo.disabled)
        }, false)
      },
      $touchstart (e) {
        return {
          y: e.touches[0].clientY,
          currentDate: new Date().getTime()
        }
      },
      $touchmove (e, startY, index, isSetIndex) {
        const y = e.touches[0].clientY - startY
        if (y > 0) {
          if (!isSetIndex) {
            const indexed = index - 1
            if (indexed <= 0) {
              return {
                isSetIndex: false,
                disabled: true
              }
            }
            this.pageIndex = indexed
          }
          this.pageMoveing(-(this.fullHeight) + y, this.pageIndex)
          return {
            y,
            isSetIndex: true,
            position: 'down'
          }
        } else {
          if (!this.pages[this.pageIndex]) {
            return {
              disabled: true
            }
          }
          if (isSetIndex) {
            this.pageIndex = this.pageIndex + 1
            this.pageMoveing(y, this.pageIndex)
            return {
              y,
              isSetIndex: false
            }
          }
          this.pageMoveing(y, this.pageIndex)
          return {
            y,
            position: false
          }
        }
      },
      $touchend (endY, startTime, position, disabled) {
        if (disabled) return
        if (position) {
          let $position = ''
          if (this.fullHeight / 2 > Math.abs(endY)) {
            $position = 'up'
          } else if (this.fullHeight / 2 < Math.abs(endY)) {
            $position = 'down'
          }
          const endTime = new Date().getTime()
          if (endTime - startTime < 300) {
            this.downWard()
            return
          }
          this[`${$position}Ward`]()
          return
        }
        const endTime = new Date().getTime()
        if (endTime - startTime < 300) {
          this.upWard()
          return
        }
        if (this.fullHeight / 2 < Math.abs(endY)) {
          this.upWard()
        } else {
          // console.log(this.pageIndex)
          this.downWard()
        }
      },
      upWard () {
        this.pageMoveing(-this.fullHeight, this.pageIndex, true)
        this.pageIndex = this.pageIndex + 1
      },
      downWard () {
        this.pageMoveing(0, this.pageIndex, true)
      }
    },
    watch: {
      pageIndex (val) {
        this.setIndex(val)
      },
      pages (list) {
        list.forEach((item, index) => {
          item.$el.addEventListener('webkitTransitionEnd', () => {
            this.setPageAnimation(true)
          }, false)
        })
      },
      homePageIndex (val) {
        this.pageIndex = val
      }
    },
    props: {
      pageMoveing: {
        type: Function
      },
      setIndex: {
        type: Function
      },
      setPageAnimation: {
        type: Function
      },
      pages: {
        type: Array,
        default () {
          return []
        }
      },
      homePageIndex: {
        type: Number
      }
    }
  }
</script>
<style lang=scss scoped>
  .next {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 2001;
    > img {
      width: .8rem;
      position: relative;
      top: -.2rem;
      animation: icon_move 2s infinite;
    }
  }
  @keyframes icon_move {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    50% {
      transform: translate3d(0, -.3rem, 0);
      opacity: .5;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
</style>
