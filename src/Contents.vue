<template>
  <div v-bind:style="{ height: this.height-25+'px' , width : '100%' }" >
    <div class="titleSection">
      <input placeholder="Title" value="テスト">
    </div>
    <SplitpanesWrapper :hideEditPane="hideEditPane" :hidePreviewPane="hidePreviewPane" :source="source"></SplitpanesWrapper>
    <Footer>
      <button @click="hideEditPane = false;hidePreviewPane=true">edit</button>
      <button @click="hideEditPane = false;hidePreviewPane=false">both</button>
      <button @click="hideEditPane = true;hidePreviewPane=false">Preview</button>
    </Footer>
  </div>
</template>

<script>
import SplitpanesWrapper from './SplitpanesWrapper.vue'
import Footer from './Footer.vue'

export default {
  components: {
    SplitpanesWrapper,
    Footer
  },
  data () {
    return {
      hideEditPane: false,
      hidePreviewPane: false,
      width: window.innerWidth,
      height: window.innerHeight,
      source: '#test'
    }
  },
  methods: {
    handleResize: function () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
.titleSection {
    display: flex;
    height: 50px;
    width: 100%;
    border-width: 0px 0px 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
}
.titleSection input {
    font-size: 24px;
    height: 100%;
    background-color: transparent;
    color: #2c3e50;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px 12px;
    flex: 1 1 0%;
    outline: none;
    box-sizing: border-box;
}
</style>
