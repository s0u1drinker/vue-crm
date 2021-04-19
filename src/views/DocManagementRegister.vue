<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      :title="register.title"
      :logo="true"
    />
    <div class="register">
      <div class="register__buttons">
        <router-link
          class="button button-icon button_outline"
          :to="{name: 'DocManagement'}"
        >
          <i class="icon icon-chevron"></i>
          К спсику журналов
        </router-link>
        <button
          class="button button-icon button_outline"
          @click="showRegisterList = !showRegisterList"
        >
          <i
            class="icon"
            :class="`icon-${showRegisterList ? 'add' : 'table'}`"
          ></i>
          {{ showRegisterList ? 'Добавить запись в журнал' : 'Посмотреть журнал' }}
        </button>
      </div>
      <Table
        :header="register.head || []"
        :body="register.list || []"
        :sizes="[15, 20, 10]"
        v-show="showRegisterList"
      />
      <component
        :is="component"
        v-show="!showRegisterList"
      />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import DMService from '@/services/DocManagementService'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import Table from '@/components/Table'

import { bus } from '../main'

export default {
  name: 'DocManagementAddRegister',
  data: function () {
    return {
      register: [],
      showRegisterList: true,
      component: ''
    }
  },
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    Table
  },
  methods: {
    getRegisterData: async function () {
      this.register = (await DMService.getRegisterData(this.$route.params.id)).data[0]
      this.register.head = this.register.head.filter(item => item.show)
      this.component = () => import('../components/Registers/' + this.register.reg_num)
    }
  },
  created: function () {
    this.getRegisterData()
  },
  mounted: async function () {
    bus.$on('forceUpdateRegisterList', () => {
      this.getRegisterData()
    })
  }
}
</script>

<style lang="scss">
.register {
  margin-top: 4rem;

  &__buttons {
    display: flex;

    .button {
      color: inherit;

      & + .button {
        margin-left: 1rem;
      }
    }
  }

  &-form {
    margin-top: 4rem;

    input,
    textarea,
    select {
      @include def-border-gray;
    }

    textarea {
      padding: .5rem 1rem;
    }

    &__group {
      $width_title: 12rem;
      display: flex;
      width: 100%;

      &_margin {
        margin-left: $width_title + 1rem;

        * + * {
          margin-left: 1rem;
        }
      }

      h3 + &,
      & + & {
        margin-top: 2rem;
      }

      &-title {
        padding-top: .5rem;
        text-align: right;
        width: $width_title;

        & + *,
        & + * + * {
          margin-left: 1rem;
        }
      }
    }

    &__column {
      $half_width: 5.5rem;
      $width: $half_width * 2 + 1rem;
      width: $width;

      &_half {
        width: $half_width;
      }

      &_oneandhalf {
        width: $width + 1rem + $half_width;
      }

      &_double {
        width: $width * 2 + 1rem;
      }
    }
  }
}
</style>
