<template>
  <MonacoEditor class="editor" ref="editor" v-model="code" :options="{automaticLayout: true}" language="markdown" />
</template>

<script>
import MonacoEditor from 'vue-monaco'
import _ from 'lodash'

export default {
  components: {
    MonacoEditor
  },
  data () {
    return {
      code: '# test  ## hoge'
    }
  },
  watch: {
    code: _.debounce(function (e) {
      console.log(this.code)
    }, 300)
  },
  methods: {
    resize () {
      this.$refs.editor.getMonaco().layout()
    }
  }
}
</script>

<style>
.editor {
  width: 100%;
  height: 100%;
}
</style>
