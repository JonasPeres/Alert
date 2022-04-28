<template>
  <q-layout view="Lhr LpR LFf" class="bg-white">
    <q-header class="text-black" :class="$q.screen.sm || $q.screen.xs ? 'bg-white' : 'bg-white q-ma-md q-px-md'">
      <div v-if="$q.screen.sm || $q.screen.xs" class="col-12 row justify-between items-center q-px-sm">
        <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center'
            : 'col-auto row items-center'
          "
          style="height: 1px; position: relative; top: -74px"
        >
          <q-img 
            src="LogoAlertFull.png"
            style="cursor: pointer;" 
            @click="redirectRoute('/dashboard')"
            :width="
              $q.screen.xl
              ? '150px'
              : $q.screen.lt.lg
              ? '150px'
              : $q.screen.lt.md
              ? '125px'
              : $q.screen.sm
              ? '100px'
              : '90px'
            "
          />
        </div>
        <q-btn icon="menu" flat size="28px" color="secondary" @click="closeMenu()" :class="$q.screen.sm || $q.screen.xs ? 'q-pa-sm' : ''"/>
      </div>
      <q-separator v-if="$q.screen.sm || $q.screen.xs" size="2px"/>
      <div class="col-12 row items-center" :class="$q.screen.sm ? 'q-pt-md justify-between' : $q.screen.sm || $q.screen.xs || $q.screen.xs ? 'bg-white q-pt-md justify-between' : 'justify-between'">
        <q-item-label class="text-h4 text-secondary" :class="$q.screen.sm || $q.screen.xs ? 'q-pl-sm text-h5' : ''">
          {{ namePage }}
        </q-item-label>
        <div class="col-auto row justify-end">
          <q-btn flat no-caps>
            <q-menu
              anchor="bottom start"
              transition-show="flip-right"
              transition-hide="flip-left"
              style="overflow: hidden;"
            >
              <q-list class="bg-white" style="width: 280px;">
                <q-item to="/meus-dados" clickable class="col-grow row text-weight-medium">
                  <q-item-section class="col-2">
                    <q-icon name="person" size="30px" color="black"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-black">Meus dados</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable class="col-grow row text-weight-medium" @click="logout">
                  <q-item-section class="col-2">
                    <q-icon name="r_logout" size="30px" color="black"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-black">Sair</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator class="col-12" size="2px"></q-separator>
                <q-item class="col-grow row text-weight-medium">
                  <q-item-section>
                    <q-item-label>Versão: {{ versionApp }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-item-label class="q-pr-xs" :class="$q.screen.sm || $q.screen.xs ? 'text-h6' : 'text-h5'">
              {{ usuario === 'e01437' ? 'Jonas' : usuario }}
            </q-item-label>
            <q-icon name="keyboard_arrow_down"></q-icon>
            <q-avatar color="grey" text-color="grey-2" class="q-ml-md">
              <q-icon name="person"></q-icon>
            </q-avatar>
          </q-btn>
        </div>  
      </div>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen" 
      show-if-above 
      side="left"
      elevated
      @click="$q.screen.sm || $q.screen.xs ? closeMenu() : ''"
      class="bg-white" 
      :width="$q.screen.sm || $q.screen.xs ? 280 : 280" 
    >
      <q-scroll-area class="full-height" visible>
        <q-list @click="$q.screen.sm || $q.screen.xs ? closeMenu() : ''" style="max-height: 100%;">
          <q-item class="col-12 row no-wrap" style="width: 100%; height: 90px">
            <div class="col-12 row justify-center" :style="$q.screen.xl || $q.screen.lg || $q.screen.md ? 'position: relative; top: -40px' : 'position: relative; top: -32px'">
              <q-img 
                src="LogoAlertFull.png" 
                :width="
                  $q.screen.xl
                  ? '190px'
                  : $q.screen.lg
                  ? '190px'
                  : $q.screen.md
                  ? '190px'
                  : $q.screen.sm
                  ? '190px'
                  : '150px'
                "
                style="cursor: pointer;" 
                @click="redirectRoute('/dashboard')"
              />
            </div>
          </q-item>
          <div :class="$q.screen.xl || $q.screen.lg || $q.screen.md || $q.screen.sm ? 'q-pt-xl' : 'q-pt-lg'">
            <menu-item-page @click="closeMenu()" />
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 15px;
}
</style>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'
import { Options } from 'vue-class-component';
import MenuItemPage from 'components/MenuItemPage.vue'
import { Watch } from 'vue-property-decorator';
import { LocalStorage, SessionStorage } from 'quasar';
import { version } from '../../package.json'

@Options({
  components: {
    MenuItemPage,
  }
})

export default class LoggedLayout extends AbstractComponent {

  usuario = ''
  namePage = ''
  leftDrawerOpen = false
  versionApp = version

  @Watch('$route', { deep: true }) updateName () {
    this.namePage = this.$route.meta.name as string
  }

  created () {
    const usuario = localStorage.getItem('usuario')
    if (usuario)
    this.usuario = usuario
    this.namePage = this.$route.meta.name as string
  }

  closeMenu () {
    this.leftDrawerOpen = !this.leftDrawerOpen
  }

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  logout () {
    void this.$router.push('/login')
    LocalStorage.clear()
    SessionStorage.clear()
  }
}
</script>