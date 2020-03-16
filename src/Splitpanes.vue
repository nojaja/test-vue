<template>
  <div>
    <button @click="hideEditPane = false;hidePreviewPane=true">edit</button>
    <button @click="hideEditPane = false;hidePreviewPane=false">both</button>
    <button @click="hideEditPane = true;hidePreviewPane=false">Preview</button>
    <splitpanes style="height: 400px" @resize="handler">
      <pane class="noteListMenu" min-size="10" max-size="30" >
        <div class="newNote">+New</div>
        <ul tabindex="0" class="noteList">
          <li class="noteListItem active"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:get-started" draggable="true"><div class="container"><div class="title">Get Started!</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:daily-task" draggable="true"><div class="container"><div class="title">Today's Task</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:community" draggable="true"><div class="container"><div class="title">About our community</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:keyboard-shortcuts" draggable="true"><div class="container"><div class="title">Keyboard shortcuts</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:storage-guide" draggable="true"><div class="container"><div class="title">Storage guide</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:brainstorm" draggable="true"><div class="container"><div class="title">Template - Brainstorm</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:bugfix-report" draggable="true"><div class="container"><div class="title">Template - Bugfix Report</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:meeting-notes" draggable="true"><div class="container"><div class="title">Template - Meeting Notes</div></div></a></div></li>
          <li class="noteListItem"><div class="noteListItem-text"><a href="/app/tutorials/notes/note:weekly-planner" draggable="true"><div class="container"><div class="title">Template - Weekly Planner</div></div></a></div></li>
        </ul>
      </pane>
      <pane v-if="!hideEditPane">
        <span>2</span>
        <Monaco ref="monaco"></Monaco>
      </pane>
      <pane v-if="!hidePreviewPane">
        <span>3</span>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Monaco from './Monaco.vue'

export default {
  components: {
    Splitpanes,
    Pane,
    Monaco
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
.splitpanes--vertical>.splitpanes__splitter, .splitpanes--vertical>.splitpanes__splitter {
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
.splitpanes--vertical>.splitpanes__splitter:after, .splitpanes--vertical>.splitpanes__splitter:after, .splitpanes--vertical>.splitpanes__splitter:before, .splitpanes--vertical>.splitpanes__splitter:before {
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
.newNote {
    position: fixed;
    top: 0;
    left: 0;
    padding: 18px 16px;
    opacity: .9;
    width: 100%;
    background: inherit;
    z-index: 10;
}
.newNote, .noteListItem {
    display: block;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.05);
    font-size: 15px;
    height: 54px;
    box-sizing: border-box;
}
.noteList {
    padding: 54px 0;
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box
}

.noteListItem-text {
    padding: 18px 16px;
    -webkit-transition: .3s;
    transition: .3s;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 17px;
    font-size: 14px;
    opacity: .6
}
.newNote, .noteListItem, .sublist-item, body, html, svg:not(:root) {
    overflow: hidden;
}
.noteListItem.active .noteListItem-text {
    opacity: .9
}

.noteListItem.active {
    border-left: 3px solid #1e87f0
}

.noteListItem {
    display: block;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.05);
    font-size: 15px;
    height: 54px;
    box-sizing: border-box;
}

.noteListItem:hover {
    opacity: 1;
    background-color: rgba(0,0,0,.01);
}

.splitpanes {
    overflow-y: scroll;
    -ms-overflow-style: none;    /* IE, Edge ‘Î‰ž */
    scrollbar-width: none;       /* Firefox ‘Î‰ž */
}
.splitpanes::-webkit-scrollbar {
    display: none;
}
</style>
