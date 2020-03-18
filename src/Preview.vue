<template>
  <div><iframe id="child-frame" class="preview" :srcdoc="compiledMarkdown" ></iframe></div>
</template>

<script>
import md from 'markdown-it'
import emoji from 'markdown-it-emoji'

export default {
  components: {
  },
  data () {
    return {
      code: '# test  \n## hoge'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return md({
        linkify: true,
        typography: true
      })
        .use(emoji)
        .render(this.code.trim())
    }
  },
  methods: {
  }
}
</script>

<style>
.preview {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
