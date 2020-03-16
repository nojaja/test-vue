<template>
  <MonacoEditor class="editor" ref="editor" v-model="code" language="javascript" />
</template>

<script>
import MonacoEditor from 'vue-monaco'

export default {
  components: {
    MonacoEditor
  },
  data () {
    return {
      code: 'const noop = () => {}'
    }
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
  height: 400px;
}
</style>
