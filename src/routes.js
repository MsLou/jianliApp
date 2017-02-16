export default [
  {
    path: '/',
    name: 'basicinfo',
    component (resolve) {
      resolve(require('./router/basicinfo'))
    }
  },
  {
    path: '/work',
    name: 'work',
    component (resolve) {
      resolve(require('./router/work'))
    }
  }
]
