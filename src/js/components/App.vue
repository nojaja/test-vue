<template>
  <div id="app">
    <Menu/>
      <main id="page-wrap">
    </main>
    <MainContents></MainContents>
    <global-events @keydown.ctrl.s="saveProject"></global-events>
    <div>
      <h1>Counter</h1>
      <div >
        <div>
          {{ showCounter }}
        </div>
        <button @click="increment">
          increment
        </button>
      </div>
    </div>
    <img alt="Vue logo" src="../../assets/logo.png">
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
import HelloWorld from '@/components/HelloWorld.vue'
import VerticalPanes from '@/components/VerticalPanes.vue'
import HorizontalPanes from '@/components/HorizontalPanes.vue'
import CustomResizer from '@/components/CustomResizer.vue'
import MainContents from '@/components/MainContents.vue'
import store from '@/store'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VerticalPanes,
    HorizontalPanes,
    CustomResizer,
    MainContents
  },
  props: {
  },
  store,
  computed: {
    showCounter () {
      return this.$store.getters.countWithSuffix
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    saveProject () {
      this.$toasted.show('Save Project', { position: 'top-center', duration: 900 })
    }
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
