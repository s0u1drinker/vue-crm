<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Документооборот"
      :logo="true"
    />
    <div class="doc-management">
      <div class="doc-management__buttons">
        <router-link
          class="button-icon button_outline"
          :to="{name: 'DMAddRegister'}"
        >
          <i class="icon icon-folder-plus"></i>
          Добавить журнал
        </router-link>
        <router-link
          class="button-icon button_outline"
          :to="{name: 'DMEditRefBooks'}"
        >
          <i class="icon icon-edit"></i>
          Редактировать справочники
        </router-link>
        <router-link
          class="button-icon button_outline"
          :to="{name: 'DMSearch'}"
        >
          <i class="icon icon-search"></i>
          Поиск данных
        </router-link>
      </div>
      <ul class="doc-management__registers">
        <li
          class="doc-management__register"
          v-for="item in registers"
          :key="item._id"
        >
          <router-link
            :to="{ path: `/doc-management/register/${item._id}` }"
          >
            {{ item.reg_num }} {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import DMService from '@/services/DocManagementService'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'

export default {
  name: 'DocManagement',
  data: function () {
    return {
      registers: []
    }
  },
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks
  },
  mounted: async function () {
    this.registers = (await DMService.getRegisters()).data
  }
}
</script>

<style lang="scss" scoped>
.doc-management {
  margin-top: 4rem;

  a {
    @include transition((background-color, color));
    color: inherit;
  }

  &__buttons {
    display: flex;

    a {
      @include def-border-radius;
      box-sizing: border-box;

      & + a {
        margin-left: 1rem;
      }
    }
  }

  &__registers {
    @include def-border-gray;
    @include def-border-radius;
    margin-top: 2rem;
  }

  &__register {

    & + & {
      border-top: 1px solid $gray;
    }

    a {
      display: flex;
      padding: 1rem;

      &:hover {
        background-color: $gray_light;
        color: $cardio;
      }
    }
  }
}
</style>
