<template>
  <div v-for="(menu_item, index) in listMenuItems" :key="index" class="col-12 row">
    <q-item
      class="text-h6 text-weight-medium"
      style="width: 100%; height: 64px"
      clickable
      active
      v-ripple
      active-class="text-secondary active-item"
      exact-active-class="background-color: white"
      :to="menu_item.to"
      @click="index === listMenuItems.length - 1 ? logout() : ''"
    >
      <q-item-section
        v-if="menu_item.icon"
        avatar
      >
        <q-icon v-if="index === listMenuItems.length - 1" name="power_settings_new" color="black" size="35px" />
        <q-img v-else :src="menu_item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ menu_item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<style>
 .active-item {
   background-color: white
 }
</style>

<script lang="ts">
import { Options } from 'vue-class-component'
import MenuItemsService from 'src/components/menu-items-service'
import AbstractComponent from './abstract-component'
import { MenuItem } from 'src/interfaces/menu-item-interface'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LocalStorage } from 'quasar'


@Options({
  name: 'menu-item-page'
})
export default class MenuItemPage extends AbstractComponent {
  listMenuItems = [] as MenuItem[]

  created() {
    this.listMenuItems = MenuItemsService.prototype.getMenuItensLoggedUser()
  }

  logout () :void {
    super.showLoading()
    try {
      localStorage.clear()
      sessionStorage.clear()
      void this.$router.push('/login')
    } catch (error) {
      super.showNotifyErrorCustom('Ocorreu um erro inesperado...')
    } finally {
      super.hideLoading()
    }
  }
}
</script>
