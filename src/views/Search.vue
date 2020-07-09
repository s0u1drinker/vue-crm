<template>
  <main-layout>
    <QuickAccessLinks offset="8" />
    <SearchForm v-on:search="getSearchData" />
    <SearchData :list="documentsList.data" />
  </main-layout>
</template>

<script>
// TODO:
// 1. Placeholder при поиске;
// 2. Информирование об отсутствии результатов поиска;
// 3. Информирование о невозможности поиска;
// 4. Стилизация результатов поиска;
// 5. Пагинация.
import { mapGetters } from 'vuex'

import DocumentService from '@/services/DocumentService'

import MainLayout from '@/layouts/MainLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import SearchForm from '@/components/SearchForm'
import SearchData from '@/components/SearchData'

export default {
  name: 'Search',
  data: function () {
    return {
      documentsList: []
    }
  },
  components: {
    MainLayout,
    QuickAccessLinks,
    SearchForm,
    SearchData
  },
  computed: {
    ...mapGetters(['getSearchText'])
  },
  methods: {
    getSearchData: async function () {
      if (this.getSearchText.length > 3) {
        this.documentsList = (await DocumentService.getDocumentsByText(this.getSearchText)).data
      }
    }
  },
  mounted: function () {
    this.getSearchData()
  }
}
</script>
