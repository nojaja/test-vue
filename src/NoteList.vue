<template>
  <div class="noteListMenu">
    <div class="newNote">+New</div>
    <ul tabindex="0" class="noteList">
      <li class="noteListItem active"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Get Started!</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Today's Task</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">About our community</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Keyboard shortcuts</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Storage guide</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Template - Brainstorm</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Template - Bugfix Report</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Template - Meeting Notes</div></div></a></div></li>
      <li class="noteListItem"><div class="noteListItem-text"><a href="" draggable="true"><div class="container"><div class="title">Template - Weekly Planner</div></div></a></div></li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
.noteListMenu {
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;    /* IE, Edge ‘Î‰ž */
    scrollbar-width: none;       /* Firefox ‘Î‰ž */
    height: 100%;
}
.noteListMenu::-webkit-scrollbar {
    display: none;
}
.newNote {
    position: absolute;
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

.newNote:hover, .noteListItem:hover {
    opacity: 1;
    background-color: rgba(0,0,0,.01);
}

.noteListItem.active {
    border-left: 3px solid #1e87f0
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

.noteListItem.active .noteListItem-text {
    opacity: .9
}

.noteList {
    padding: 54px 0;
    height: 100%;
    box-sizing: border-box;
    margin-block-start: 0;
    padding-inline-start: 0;
}

</style>
