Vue.component('main-header', {
  props: ['text'],
  template: '<header><h1><img src="images/main-energy.jpg" alt="Photo of energy">{{ text }}</h1></header>',
})