<template>
  <div class="wrapper">
    <div style="width: 200px">
      <h1 class="h1">Settings</h1>
      <div style="width: 100%">
        <TabList :items="items" :onSelect="selectItem"></TabList>
      </div>
    </div>
    <div style="width: 400px">
      <div v-if="currentId === '1'">
        <h1 class="h1">General</h1>
        <h3 class="h3">ソート</h3>
        <select class="option">
          <option value="de">更新日</option>
          <option value="en-US">作成日</option>
        </select>
        <h3 class="h3">カバー</h3>
        <select class="option">
          <option value="de">5min</option>
          <option value="en-US">10min</option>
        </select>
        <h3 class="h3">インタフェース言語</h3>
        <Select :items="selectItems"></Select>

        <h3 class="h3">Import Data</h3>
        <button class="button">Import Data</button>
        <h3 class="h3">Export Data</h3>
        <button class="button">Export Data</button>
      </div>
      <div v-else-if="currentId === '2'">
        <h1 class="h1">Editor</h1>
        <h3 class="h3">エディターフォントサイズFontSize</h3>
        <select class="option">
          <option value="de">19</option>
          <option value="en-US">24</option>
        </select>
        <h3 class="h3">エディターフォントファミリーFontFamily</h3>
        <select class="option">
          <option value="de">更新日</option>
          <option value="en-US">作成日</option>
        </select>
        <h3 class="h3">エディターインデントタイプ</h3>
        <select class="option">
          <option value="de">tab</option>
          <option value="en-US">space</option>
        </select>
        <h3 class="h3">エディターインデントサイズ</h3>
        <select class="option">
          <option value="de">4</option>
          <option value="en-US">8</option>
        </select>
        <h3 class="h3">Font Color</h3>
      </div>
      <div v-else-if="currentId === '3'">

        <h3 class="h3">インタフェース言語</h3>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable html</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable breaks</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable linkify</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable typography</label>
        </div>
        <h3 class="h3">拡張</h3>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable emoji</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable ruby</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.multiline</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.rowspan</label>
        </div>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.headerless</label>
        </div>

        <h3 class="h3">multibyte</h3>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked="">
          <label for="checkbox-enable-auto-sync" class="label">Enable convert</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabList from '@/components/TabList.vue'
import Select from '@/components/Select.vue'
import store from '@/store'

export default {
  name: 'App',
  components: {
    TabList,
    Select
  },
  data () {
    return {
      currentId: '1',
      items: [
        { id: 1, name: 'General', uri: '1', isActive: true },
        { id: 2, name: 'Editor', uri: '2', isActive: false },
        { id: 3, name: 'Markdown', uri: '3', isActive: false }
      ],
      selectItems: [
        { name: '🇩🇪Deutsch', value: 'de' },
        { name: '🇺🇸English (US)', value: 'en-US' },
        { name: '🇪🇸Español (España)', value: 'es-ES' },
        { name: '🇫🇷Français (France)', value: 'fr-FR' },
        { name: '🇯🇵日本語', value: 'ja' },
        { name: '🇰🇷한국어', value: 'ko' },
        { name: '🇧🇷Português(BR)', value: 'pt-BR' },
        { name: '🇺🇦Українська', value: 'uk-UA' },
        { name: '🇨🇳中文 (CN)', value: 'zh-CN' },
        { name: '🇭🇰中文 (HK)', value: 'zh-HK' },
        { name: '🇹🇼中文 (TW)', value: 'zh-TW' }
      ]
    }
  },
  store,
  computed: {
  },
  methods: {
    selectItem (uri) {
      console.log('methods : ' + uri)
      this.currentId = uri
    }
  }
}
</script>

<style>
.h1 {
    margin: 0px;
    padding: 10px 0px;
    font-size: 24px;
}
.h3 {
    font-size: 12px;
}
.checkbox {
    margin-top: 0px;
    margin-right: 0.3125rem;
    margin-left: 0px;
}
.label {
    display: inline-block;
    margin-bottom: 0px;
    font-size: 12px;
}
.button {
    background-color: rgb(3, 197, 136);
    color: rgb(255, 255, 255);
    font-size: 13px;
    height: 40px;
    cursor: pointer;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px 16px;
    border-radius: 2px;
}
</style>
