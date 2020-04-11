<template>
  <div class="wrapper">
    <div style="width: 200px">
      <h1 class="h1">Settings</h1>
      <div style="width: 200px">
        <TabList :items="items" :onSelect="selectItem"></TabList>
      </div>
    </div>
    <div style="width: 100%">
      <div v-if="currentId === '1'">
        <h1 class="h1">General</h1>
        <h3 class="h3">ソート</h3>
        <Select :items="sortSelectItems" :selected="config.general.sort" :onSelect="(newValue) => {config.general.sort = newValue}"></Select>

        <h3 class="h3">カバー</h3>
        <Select :items="coverSelectItems"></Select>

        <h3 class="h3">インタフェース言語</h3>
        <Select :items="selectItems" :selected="config.general.i18n_locale" :onSelect="(newValue) => {config.general.i18n_locale = newValue}"></Select>

        <h3 class="h3">Import Data</h3>
        <button class="button" @click="this.test2"><unicon name="import" fill="white"></unicon>Import Data</button>
        <h3 class="h3">Export Data</h3>
        <button class="button" @click="this.exportLocalStorage"><unicon name="export" fill="white"></unicon>Export Data</button>
        <download ref="foo"></download>
      </div>
      <div v-else-if="currentId === '2'">
        <h1 class="h1">Editor</h1>
        <h3 class="h3">エディターフォントサイズFontSize</h3>
        <input class="option" type="number" v-model="config.editor.fontSize" number>

        <!--
        <h3 class="h3">エディターフォントファミリーFontFamily</h3>
        <select class="option">
          <option value="de">更新日</option>
          <option value="en-US">作成日</option>
        </select>
        -->

        <h3 class="h3">エディターインデントサイズ</h3>
        <input class="option" type="number" v-model="config.editor.tabSize" number>

        <!--
        <h3 class="h3">Font Color</h3>
        <div>
          <color-picker :colors.sync="colors" scheme="dark"></color-picker>
        </div>
        -->

      </div>
      <div v-else-if="currentId === '3'">
        <h3 class="h3">markdown設定</h3>
        <div>
          <ToggleButton v-model="config.markdown.basicOption.html" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable html</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.basicOption.breaks" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable breaks</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.basicOption.linkify" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable linkify</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.basicOption.typography" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable typography</label>
        </div>

        <h3 class="h3">拡張</h3>
        <div>
          <ToggleButton v-model="config.markdown.emoji" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable emoji</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.ruby" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable ruby</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.multimdTable" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.multimdTableOption.multiline" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.multiline</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.multimdTableOption.rowspan" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.rowspan</label>
        </div>
        <div>
          <ToggleButton v-model="config.markdown.multimdTableOption.headerless" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable multimdTable.headerless</label>
        </div>

        <h3 class="h3">multibyte</h3>
        <div>
          <ToggleButton v-model="config.markdown.basicOption.html" :sync="true"></ToggleButton>
          <label for="checkbox-enable-auto-sync" class="label">Enable convert.headerless</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabList from '@/components/TabList.vue'
import Select from '@/components/Select.vue'
import Download from '@/components/Download.vue'
// import ColorPicker from 'vue-sketch-color-picker'
import { ToggleButton } from 'vue-js-toggle-button'
import store from '@/store'

export default {
  name: 'App',
  components: {
    TabList,
    Select,
    Download,
    // ColorPicker,
    ToggleButton
  },
  data () {
    return {
      currentId: '1',
      items: [
        { id: 1, name: 'General', uri: '1', isActive: true },
        { id: 2, name: 'Editor', uri: '2', isActive: false },
        { id: 3, name: 'Markdown', uri: '3', isActive: false }
      ],
      config: {
        general: {
          sort: '0',
          i18n_locale: 'ja'
        },
        editor: {
          automaticLayout: true,
          fontSize: 16,
          fontFamily: '',
          tabSize: 4,
          theme: 'vs'
        },
        markdown: {
          basicOption: {
            html: true,
            breaks: false,
            linkify: true,
            typography: true
          },
          emoji: true,
          ruby: true,
          multimdTable: true,
          multimdTableOption: {
            multiline: true,
            rowspan: true,
            headerless: true
          }
        }
      },
      sortSelectItems: [
        { name: '更新日-順', value: '0' },
        { name: '更新日-逆順', value: '1' },
        { name: '作成日-逆順', value: '2' },
        { name: '作成日-逆順', value: '3' }
      ],
      coverSelectItems: [
        { name: '5min', value: '5' },
        { name: '10min', value: '10' },
        { name: '60min', value: '60' },
        { name: 'none', value: '-1' }
      ],
      fintSizeSelectItems: [
        { name: '16', value: '16' },
        { name: '10min', value: '10' },
        { name: '60min', value: '60' },
        { name: 'none', value: '-1' }
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
      ],
      colors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    }
  },
  store,
  computed: {
  },
  watch: {
    config: {
      handler: function (val, oldVal) {
        console.log('someObj changed', val, oldVal)
      },
      deep: true
    }
  },
  methods: {
    selectItem (uri) {
      this.currentId = uri
    },
    exportLocalStorage () {
      localStorage.setItem('currentVersion', '0.0.1')
      this.$refs.foo.saveAsLegacy(JSON.stringify(localStorage))
      console.log(localStorage)
    },
    test2 () {
      const e = this.$refs.foo.getFileLegacy()
      e.then(function (result) {
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (event) => {
            resolve(event.target.result)
          }
          reader.readAsText(result)
        }).then((result) => {
          console.log(JSON.parse(result))
        })
      })
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
    font-size: 18px;
}
.checkbox {
    margin-top: 0px;
    margin-right: 0.3125rem;
    margin-left: 0px;
}
.label {
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 0px;
    font-size: 16px;
}
.button {
    background-color: rgb(3, 197, 136);
    color: rgb(255, 255, 255);
    font-size: 16px;
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
