<template>
  <div class="searchdata">
    <Placeholder text="Ищем документы..." v-if="searchResult.inProgress" />
    <template v-else>
      <p v-if="searchResult.lessQueryString">Необходимо ввести минимум 3 символа.</p>
      <p v-else-if="!searchResult.count">Ничего не найдено =(</p>
      <ul class="searchdata__list" v-else>
        <li
          class="searchdata__item"
          v-for="(item, index) in searchResult.list"
          :key="index"
        >
          <a
            class="searchdata__link"
            :href="`files/${item.owner._id}/${item.filename}`"
            target="_blank"
          >
            <div class="searchdata__file-icon">
              <i :class="[ 'icon', getIconForFile(extensions[index]) ]"></i>
              <span>{{ extensions[index] }}</span>
            </div>
            <div class="searchdata__file-name">
              <span class="bold">{{ `${item.type} ${ownerName(item.owner)} №${item.doc_number} от ${item.doc_date}` }}</span>
              <br />
              &laquo;{{ item.doc_name }}&raquo;
            </div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Placeholder from '@/components/Placeholder'

export default {
  name: 'SearchData',
  props: ['searchResult'],
  methods: {
    // Возвращает наименование владельца документ
    ownerName: (owner) => {
      return (owner.declension) ? owner.declension : (owner.abbr) ? owner.abbr : (owner.translit_owner_declension) ? owner.fullname : ''
    },
    // Возвращает класс иконки по расширению файла
    getIconForFile: function (ext) {
      return 'icon-' + ((ext.length > 4) ? 'file' : this.getFilesIcons[ext])
    }
  },
  components: {
    Placeholder
  },
  computed: {
    ...mapGetters(['getFilesIcons']),
    // Расширения файлов
    extensions: function () {
      return this.searchResult.list.map(function (doc) {
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
.searchdata {
  margin-top: 4rem;

  &__item {
    display: flex;

    & + & {
      margin-top: 2rem;
    }
  }

  &__link {
    display: flex;

    &:hover {

      .searchdata__file-name {
        color: $cardio;
      }
    }
  }

  &__file {
    $box-padding: 1rem;

    &-icon {
      align-items: center;
      background-color: $gray_light;
      display: flex;
      padding: 1rem $box-padding;
      flex: 1 0 auto;
      flex-direction: column;
      width: 5rem;

      i.icon {
        font-size: 2.5rem;
      }

      span {
        color: $black;
        margin-top: .25rem;
      }
    }

    &-name {
      @include transition(color);
      color: $primary_dark;
      line-height: 1.5;
      padding: $box-padding;
      width: 100%;
    }
  }
}
</style>
