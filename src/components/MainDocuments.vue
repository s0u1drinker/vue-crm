<template>
  <div class="m-docs">
    <div class="m-docs__tabs">
      <a
        href="#"
        class="m-docs__tab"
        :class="[ (box.show) ? 'm-docs__tab_show' : '' ]"
        v-for="(box, index) in documentsLinks"
        :key="index"
        v-html="box.header"
        @click.prevent="setLinksToShow(index)"
      ></a>
    </div>
    <ul class="m-docs__panel">
      <li
        class="m-docs__item"
        v-for="link in linksToShow"
        :key="link._id"
      >
        <a
          :href="`files/${link.doc_owner}/${link.filename}`"
          target="_blank"
          class="m-docs__link"
          v-html="`${link.doc_type.type} ${ownerName(link)} №${link.doc_number} от ${link.doc_date} &laquo;${link.doc_name}&raquo;`"
          @click="updViewsCount(link._id)"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import DocumentService from '@/services/DocumentService'

export default {
  name: 'MainDocuments',
  data: function () {
    return {
      documentsLinks: [],
      linksToShow: []
    }
  },
  methods: {
    // Возвращает наименование владельца документ
    ownerName: (link) => {
      return (link.owner.declension) ? link.owner.declension : (link.owner.attr) ? link.owner.attr : (link.owner.translit_owner_declension) ? link.owner.fullname : ''
    },
    // Сбрасывает флаг у "табов", копирует данные в массив для показа ссылок
    setLinksToShow: function (index) {
      this.documentsLinks.forEach((item, i) => { item.show = (index === i) })
      this.linksToShow = this.documentsLinks[index].links
    },
    // Отправляет асинхронный запрос на обновление счетчика просмотров у документа
    updViewsCount: function (id) {
      DocumentService.updateViewsCountOfDocument(id)
    }
  },
  mounted: async function () {
    const links = await DocumentService.getDocumentsForMainPage()

    this.documentsLinks.push({ header: 'Приказы ГБУЗ &laquo;ВОККЦ&raquo;', show: true, links: links.data.vokkc })
    this.documentsLinks.push({ header: 'Приказы КЗ ВО', show: false, links: links.data.kzvo })
    this.documentsLinks.push({ header: 'Прочие документы', show: false, links: links.data.other })

    this.linksToShow = this.documentsLinks[0].links
  }
}
</script>

<style lang="scss" scoped>
.m-docs{
  margin-top: 4rem;

  &__tab {
    $linkColor: $dark;
    $underlineHeight: .125rem;
    color: $linkColor;
    display: inline-block;
    overflow: hidden;
    padding-bottom: $underlineHeight*2;
    position: relative;

    &::after {
      @include transition(left);
      background-color: $cardio;
      bottom: 0;
      content: '';
      height: $underlineHeight;
      left: -100%;
      position: absolute;
      width: 100%;
    }

    & + & {
      margin-left: 2rem;
    }

    &:visited {
      color: $linkColor;
    }

    &:hover {

      &::after {
        left: 0;
      }
    }

    &_show {
      color: $cardio;
      pointer-events: none;

      &::after {
        left: 0;
      }
    }
  }

  &__panel {
    margin-top: 1rem;
    min-height: 14rem;
  }

  &__item {
    line-height: 1.25;

    &::before {
      content: '\27A5';
      padding-right: .25rem;
    }

    & + & {
      margin-top: 1rem;
    }
  }

  &__link {
    color: $primary_dark;

    &:hover {
      color: $cardio;
    }
  }
}
</style>
