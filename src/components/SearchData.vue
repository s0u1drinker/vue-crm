<template>
  <div class="search-data">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <i :class="[ 'icon', getIconForFile(extensions[index]) ]"></i>
        {{ extensions[index] }}
        {{ item.doc_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchData',
  props: ['list'],
  methods: {
    // Возвращает наименование владельца документ
    ownerName: (link) => {
      return (link.owner.declension) ? link.owner.declension : (link.owner.abbr) ? link.owner.abbr : (link.owner.translit_owner_declension) ? link.owner.fullname : ''
    },
    // Возвращает класс иконки по расширению файла
    getIconForFile: function (ext) {
      return 'icon-' + ((ext.length > 4) ? 'file' : this.getFilesIcons[ext])
    }
  },
  computed: {
    ...mapGetters(['getFilesIcons']),
    // Расширения файлов
    extensions: function () {
      return this.list.map(function (doc) {
        const filename = doc.filename
        const tmp = filename.split('.')
        const ext = tmp[tmp.length - 1]

        return ext
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
