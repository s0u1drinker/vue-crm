<template>
  <div class="m-docs">
    <div
      class="m-docs__box"
      v-for="(box, index) in documentsLinks"
      :key="index"
    >
      <h4 class="m-docs__box-header" v-html="box.header"></h4>
      <ul class="m-docs__list">
        <li
          class="m-docs__item"
          v-for="link in box.links" :key="link._id"
        >
          <a
            :href="`${link.doc_owner}/${link.filename}`"
            class="m-docs__link"
            v-html="`${link.doc_type.type} ${ownerName(link)} №${link.doc_number} от ${link.doc_date} &laquo;${link.doc_name}&raquo;`"
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DocumentService from '@/services/DocumentService'

export default {
  name: 'MainDocuments',
  data: function () {
    return {
      documentsLinks: []
    }
  },
  methods: {
    ownerName: (link) => {
      return (link.owner.declension) ? link.owner.declension : (link.owner.attr) ? link.owner.attr : (link.owner.translit_owner_declension) ? link.owner.fullname : ''
    }
  },
  mounted: async function () {
    const links = await DocumentService.getDocumentsForMainPage()

    this.documentsLinks.push({ header: 'Приказы ГБУЗ &laquo;ВОККЦ&raquo;', links: links.data.vokkc })
    this.documentsLinks.push({ header: 'Приказы КЗ ВО', links: links.data.kzvo })
    this.documentsLinks.push({ header: 'Прочие документы', links: links.data.other })
  }
}
</script>

<style lang="scss" scoped>
.m-docs{
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  &__box {
    width: 30%;

    &-header {
      margin-bottom: 1rem;
    }
  }

  &__link {}

  &__list {}

  &__item {}
}
</style>
