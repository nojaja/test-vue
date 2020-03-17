<template>
  <div id="app">
    <Splitpanes></Splitpanes>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <section class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h2 class="title">Vertical Panes</h2>
          </div>
          <div class="column is-narrow">
            <a href="https://github.com/yansern/vue-multipane/blob/master/demo/src/VerticalPanes.vue" class="button is-warning">View code &raquo;</a>
          </div>
        </div>
        <VerticalPanes></VerticalPanes>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h2 class="title">Horizontal Panes</h2>
          </div>
          <div class="column is-narrow">
            <a href="https://github.com/yansern/vue-multipane/blob/master/demo/src/HorizontalPanes.vue" class="button is-warning">View code &raquo;</a>
          </div>
        </div>
        <HorizontalPanes></HorizontalPanes>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h2 class="title">Custom Resizer</h2>
          </div>
          <div class="column is-narrow">
            <a href="https://github.com/yansern/vue-multipane/blob/master/demo/src/CustomResizer.vue" class="button is-warning">View code &raquo;</a>
          </div>
        </div>
        <CustomResizer></CustomResizer>
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VerticalPanes from './VerticalPanes.vue'
import HorizontalPanes from './HorizontalPanes.vue'
import CustomResizer from './CustomResizer.vue'
import Splitpanes from './Splitpanes.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VerticalPanes,
    HorizontalPanes,
    CustomResizer,
    Splitpanes
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&amp;subset=japanese');
#app {
  font-family: 'M PLUS 1p', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
}
body {
  margin: 0px;
}
</style>
