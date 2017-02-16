<template>
  <div class='app'>
    <div v-if="!isPc">
      <loading :show='isLoadingShow' :setIndex='setIndex'></loading>
      <next :pageMoveing='pageMoveing' :setIndex='setIndex' :setPageAnimation='setPageAnimation' :pages='pages' :homePageIndex='pageIndex'></next>
      <page6 ref='page6' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page6.transition, transform: `translate3d(0, ${page6.translateY}, 0)` }'></page6>
      <page5 ref='page5' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page5.transition, transform: `translate3d(0, ${page5.translateY}, 0)` }'></page5>
      <page4 ref='page4' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page4.transition, transform: `translate3d(0, ${page4.translateY}, 0)` }'></page4>
      <page3 ref='page3' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page3.transition, transform: `translate3d(0, ${page3.translateY}, 0)` }'></page3>
      <page2 ref='page2' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page2.transition, transform: `translate3d(0, ${page2.translateY}, 0)` }'></page2>
      <page1 ref='page1' :pageIndex='pageIndex' :isPageAnimation='isPageAnimation' :style='{ transition: page1.transition, transform: `translate3d(0, ${page1.translateY}, 0)` }' :isLoadingShow='isLoadingShow'></page1>
    </div>
    <div v-else>请使用手机浏览器打开</div>
  </div>
</template>
<script>
  import page1 from './../basicinfo'
  import page2 from './../aboutme'
  import page3 from './../skill'
  import page4 from './../work'
  import page5 from './../project'
  import page6 from './../over'
  import next from './next'
  import loading from './../../components/loading'

  function browserRedirect () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return false
    } else {
      return true
    }
  }

  export default {
    created () {
      const type = browserRedirect()
      document.querySelector('body').addEventListener('touchstart', (ev) => {
        ev.preventDefault()
      })
      if (type) {
        this.isPc = true
        return
      }
      const backImg = new Image()
      backImg.src = require('./../../assets/img/h5.png')
      backImg.onload = () => {
        setTimeout(() => {
          this.isLoadingShow = false
        }, 500)
      }
    },
    mounted () {
      this.pages = this.getPageEl()
    },
    data () {
      return {
        page1: {
          translateY: '0px',
          transition: '0s'
        },
        page2: {
          translateY: '0px',
          transition: '0s'
        },
        page3: {
          translateY: '0px',
          transition: '0s'
        },
        page4: {
          translateY: '0px',
          transition: '0s'
        },
        page5: {
          translateY: '0px',
          transition: '0s'
        },
        page6: {
          translateY: '0px',
          transition: '0s'
        },
        isPc: false,
        pageIndex: 0,
        pages: [],
        isLoadingShow: true, // loading 是否显示
        isPageAnimation: true // 动画是否结束
      }
    },
    methods: {
      pageMoveing (num, index, isTrans) {
        if (isTrans) {
          this[`page${index}`].transition = '.5s'
        } else {
          this[`page${index}`].transition = '0s'
        }
        this[`page${index}`].translateY = `${num}px`
      },
      setIndex (index) {
        this.pageIndex = index
      },
      setPageAnimation (isOk) {
        this.isPageAnimation = isOk
      },
      getPageEl () {
        const pages = []
        for (let i = 1; i < 10; i += 1) {
          const page = this.$refs[`page${i}`]
          if (page) {
            pages.push(page)
          } else break
        }
        return pages
      }
    },
    components: {
      next,
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      loading
    }
  }

</script>
<style lang=scss scoped>
  .app {
    height: 100%
  }
</style>
