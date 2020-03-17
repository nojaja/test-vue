<template>
  <div>
    <splitpanes style="height: 400px" @resize="handler">
      <pane min-size="10" max-size="40" >
        <NoteList></NoteList>
      </pane>
      <pane v-if="!hideEditPane">
        <Monaco ref="monaco"></Monaco>
      </pane>
      <pane v-if="!hidePreviewPane">
      </pane>
    </splitpanes>
    <button @click="hideEditPane = false;hidePreviewPane=true">edit</button>
    <button @click="hideEditPane = false;hidePreviewPane=false">both</button>
    <button @click="hideEditPane = true;hidePreviewPane=false">Preview</button>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import NoteList from './NoteList.vue'
import Monaco from './Monaco.vue'

export default {
  components: {
    Splitpanes,
    Pane,
    Monaco,
    NoteList
  },
  data () {
    return {
      hideEditPane: false,
      hidePreviewPane: false
    }
  },
  methods: {
    handler (event) {
      this.$refs.monaco.resize()
    }
  }
}
</script>

<style>
.splitpanes .splitpanes__pane {
}

.splitpanes--vertical>.splitpanes__splitter {
    width: 7px;
    border-left: 1px solid #eee;
    margin-left: -1px;
}
.splitpanes .splitpanes__splitter {
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.splitpanes--vertical>.splitpanes__splitter:before, .splitpanes--vertical>.splitpanes__splitter:before {
    margin-left: -2px;
}
.splitpanes--vertical>.splitpanes__splitter:after, .splitpanes--vertical>.splitpanes__splitter:before {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 1px;
    height: 30px;
}
.splitpanes .splitpanes__splitter:after, .splitpanes .splitpanes__splitter:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.15);
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
}
</style>
