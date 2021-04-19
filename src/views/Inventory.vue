<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Инвентаризация"
      :logo="true"
    />
    <Elements
      :list="depList"
      :showEffect="'slider'"
      v-on:valueSelected="updateTableBody"
    />
    <Table
      :header="table.header"
      :body="table.body"
      :showNoData="idDep && table.body.length < 1"
      v-show="idDep"
    />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import DepService from '@/services/DepService'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import Elements from '@/components/Elements'
import Table from '@/components/Table'

export default {
  name: 'Inventory',
  data: function () {
    return {
      idDep: '',
      depList: [],
      table: {
        header: [
          {
            id: 'cabinet_num',
            title: '№ кабинета'
          },
          {
            id: 'user',
            title: 'Пользователь'
          },
          {
            id: 'inventory_number',
            title: 'Инвентарный номер'
          },
          {
            id: 'type',
            title: 'Тип устройства'
          },
          {
            id: 'model',
            title: 'Модель'
          },
          {
            id: 'description',
            title: 'Описание'
          }
        ],
        body: []
      }
    }
  },
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    Elements,
    Table
  },
  methods: {
    updateTableBody: async function (id) {
      this.idDep = id
      this.table.body = (await DepService.getDepartmentCabinets(id)).data
    }
  },
  mounted: async function () {
    this.depList = (await DepService.getListDepartments()).data
  }
}
</script>

<style lang="scss" scoped>

</style>
