<template>
  <div class="wrapper">
    <div style="width: 200px">
      <h1 class="h1">設定</h1>
      <div style="width: 100%">
        <TabList :items="items" :onSelect="selectItem"></TabList>
      </div>
    </div>
    <div style="width: 400px">
      <div v-if="currentId === '1'">
        <h1 class="h1">General</h1>
        <button class="button">ログイン</button>
        <h3 >ソート</h3>
        <h3 >アカウント連携</h3>
        <h3 >インタフェース言語</h3>
        <Select :items="selectItems"></Select>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked=""><label for="checkbox-enable-auto-sync" class="label">Enable auto sync</label></div>

        <h3 >インタフェース言語</h3>
        <select class="option">
          <option value="de">🇩🇪Deutsch</option>
          <option value="en-US">🇺🇸English (US)</option>
          <option value="es-ES">🇪🇸Español (España)</option>
          <option value="fr-FR">🇫🇷Français (France)</option>
          <option value="ja">🇯🇵日本語</option>
          <option value="ko">🇰🇷한국어</option>
          <option value="pt-BR">🇧🇷Português (BR)</option>
          <option value="uk-UA">🇺🇦Українська</option>
          <option value="zh-CN">🇨🇳中文 (CN)</option>
          <option value="zh-HK">🇭🇰中文 (HK)</option>
          <option value="zh-TW">🇹🇼中文 (TW)</option>
        </select>
        <div><input type="checkbox" id="checkbox-enable-auto-sync" class="checkbox" checked=""><label for="checkbox-enable-auto-sync" class="label">Enable auto sync</label></div>
      </div>
      <div v-else-if="currentId === '2'">
        <h1 class="h1">Editor</h1>
        <h3 >エディターフォントサイズ</h3>
        <h3 >エディターフォントファミリー</h3>
        <h3 >エディターインデントタイプ</h3>
        <h3 >エディターインデントサイズ</h3>
      </div>
      <div v-else-if="currentId === '3'">
        <h1 class="h1">Markdown</h1>
        <h3 >ソート</h3>
        <h3 >アカウント連携</h3>
        <h3 >インタフェース言語</h3>
 html  xhtmlOut  breaks  linkify  typographer  highlight
      </div>
      <div v-else-if="currentId === '4'">
        <h1 class="h1">Import</h1>
        <h3 >ソート</h3>
        <h3 >アカウント連携</h3>
        <h3 >インタフェース言語</h3>
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
        { id: 3, name: 'Markdown', uri: '3', isActive: false },
        { id: 4, name: 'Import', uri: '4', isActive: false }
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
}
.checkbox {
    margin-top: 0px;
    margin-right: 0.3125rem;
    margin-left: 0px;
}
.label {
    display: inline-block;
    margin-bottom: 0px;
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
