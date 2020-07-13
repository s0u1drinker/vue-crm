<template>
  <main-layout>
    <QuickAccessLinks offset="8" />
    <SearchForm v-on:search="getSearchResult" />
    <SearchData :searchResult="searchResult" />
    <Pagination
      v-on:getPage="getSearchResult"
      :limit="limit"
      :total="total"
      :page="page"
    />
  </main-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import DocumentService from '@/services/DocumentService'

import MainLayout from '@/layouts/MainLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import SearchForm from '@/components/SearchForm'
import SearchData from '@/components/SearchData'
import Pagination from '@/components/Pagination'

export default {
  name: 'Search',
  data: function () {
    return {
      searchResult: {
        list: [],
        lessQueryString: false,
        inProgress: true
      },
      limit: 10,
      total: 0,
      page: 1
    }
  },
  components: {
    MainLayout,
    QuickAccessLinks,
    SearchForm,
    SearchData,
    Pagination
  },
  computed: {
    ...mapGetters(['getSearchText'])
  },
  methods: {
    getSearchResult: async function (page) {
      const skip = page ? page - 1 : 0

      this.searchResult.list = []
      this.searchResult.inProgress = true

      if (this.getSearchText.length >= 3) {
        const tmp = (await DocumentService.getDocumentsByText(this.getSearchText, this.limit, skip)).data[0]

        this.searchResult.lessQueryString = false
        this.searchResult.list = tmp.list
        this.total = tmp.total.length ? tmp.total[0].cnt : 0
        this.searchResult.count = this.total
        this.page = skip + 1
      } else {
        this.searchResult.lessQueryString = true
      }
      this.searchResult.inProgress = false
    }
  },
  mounted: function () {
    this.getSearchResult()
  }
}
</script>
