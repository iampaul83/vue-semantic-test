<template lang="pug">
  #app
    test-modal
    header
      span Vue.js PWA
    main
      img(src='./assets/logo.png', alt='Vue.js PWA')
      p
        button.ui.button(@click='showModal') Show Modal
      router-view
</template>

<script>
export default {
  name: 'app',
  methods: {
    showModal () {
      $('.ui.modal').modal('show')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
}

// header span {
//   display: block;
//   position: relative;
//   font-size: 20px;
//   line-height: 1;
//   letter-spacing: .02em;
//   font-weight: 400;
//   box-sizing: border-box;
//   padding-top: 16px;
// }
</style>
