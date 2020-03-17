<template>
  <div class="noteListMenu">
    <div class="newNote">+New</div>
    <ul tabindex="0" class="noteList">
      <li class="noteListItem" v-for="item in items" :key="item.uri" v-bind:class="{ active: item.isActive }">
        <div class="noteListItem-text" :data-uri="item.uri" @click="select(item.uri)">
            <div class="container">
              <div class="title">{{item.name}}</div>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      items: [
        { name: 'いちご', uri: 'note_1583338656491', isActive: true },
        { name: 'りんご', uri: 'note_1583338656492', isActive: false },
        { name: 'みかん', uri: 'note_1583338656493', isActive: false },
        { name: 'Template - Weekly Planner', uri: 'note_1583338656495', isActive: false }
      ]
    }
  },
  methods: {
    select: function (uri) {
      console.log(this, uri)
      for (const i in this.items) {
        console.log(this.items[i])
        if (this.items[i].uri === uri) {
          this.items[i].isActive = true
        } else {
          this.items[i].isActive = false
        }
      }
    }
  }
}
</script>

<style>
.noteListMenu {
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;    /* IE, Edge 対応 */
    scrollbar-width: none;       /* Firefox 対応 */
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
    margin-block-end: 0;
}

</style>
