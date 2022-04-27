<template>
  <q-layout view="Lhr LpR LFf" class="bg-white">

    <q-header class="text-black" :class="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm ? 'bg-white' : 'bg-white q-mx-xl q-mt-md'">
      <div v-if="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm" class="col-12 row justify-between items-center bg-primary q-py-xs q-px-sm">
        <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center q-pa-md q-ml-lg'
            : 'col-auto row items-center q-pa-sm q-ml-xs'
          "
        >
          <q-img 
            src="LogoAlertFull.png"
            style="cursor: pointer;" 
            @click="redirectRoute('/dashboard')"
            :width="
              $q.platform.is.mobile
              ? '110px'
              : $q.screen.xl
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
        <q-btn icon="menu" flat size="28px" color="secondary" @click="closeMenu()" :class="$q.platform.is.mobile ? 'q-pa-sm' : ''"/>
      </div>
      <div class="col-12 row items-center" :class="$q.screen.sm ? 'q-pt-md justify-between' : $q.platform.is.mobile || $q.screen.xs ? 'bg-white q-pt-md justify-between' : 'justify-between'">
        <q-item-label class="text-h4 text-secondary" :class="$q.platform.is.mobile ? 'q-pl-sm text-h5' : ''">
          {{ namePage }}
        </q-item-label>
        <div v-if="$q.platform.is.mobile" class="col-auto row justify-end q-pr-sm">
          <q-btn v-if="$q.platform.is.mobile" flat no-caps>
            <q-menu
              anchor="bottom start"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-item-label class="col-12 row q-py-sm q-pl-lg" :class="$q.platform.is.mobile ? 'text-h6' : 'text-h5'">
                {{ usuario }}
              </q-item-label>
              <q-separator class="col-12" size="2px"></q-separator>
              <q-list class="bg-white" style="width: 280px;">
                <q-item to="/meus-dados" clickable class="col-grow row text-weight-medium">
                  <q-item-section class="col-2">
                    <q-icon name="person" size="30px" color="secondary"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-secondary">Meus dados</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable class="col-grow row text-weight-medium" @click="logout">
                  <q-item-section class="col-2">
                    <q-icon name="power_settings_new" size="30px" color="secondary"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-secondary">Sair</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator class="col-12" size="2px"></q-separator>
                <q-item class="col-grow row text-weight-medium">
                  <q-item-section>
                    <q-item-label>Versão: {{versionApp}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-icon name="keyboard_arrow_down"></q-icon>
            <q-avatar color="secondary" text-color="grey-2" :class="$q.platform.is.desktop ? '' : ''">
              <q-icon name="person"></q-icon>
            </q-avatar>
          </q-btn>
        </div>  
        <div v-if="!$q.platform.is.mobile" class="col-auto row justify-end q-pr-md">
          <q-btn flat no-caps>
            <q-menu
              anchor="bottom start"
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list class="bg-white" style="width: 280px;">
                <q-item to="/meus-dados" clickable class="col-grow row text-weight-medium">
                  <q-item-section class="col-2">
                    <q-icon name="person" size="30px" color="secondary"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-secondary">Meus dados</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable class="col-grow row text-weight-medium" @click="logout">
                  <q-item-section class="col-2">
                    <q-icon name="power_settings_new" size="30px" color="secondary"></q-icon>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-secondary">Sair</q-item-label>
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
            <q-item-label class="q-pr-xs" :class="$q.platform.is.mobile ? 'text-h6' : 'text-h5'">
              {{ usuario }}
            </q-item-label>
            <q-icon name="keyboard_arrow_down"></q-icon>
            <q-avatar color="secondary" text-color="grey-2" class="q-ml-md">
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
      @click="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm ? closeMenu() : ''"
      class="bg-primary" 
      :width="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm ? 316 : 311" 
    >
      <q-scroll-area class="full-height" visible>
        <q-list @click="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm ? closeMenu() : ''" style="max-height: 100%;">
          <q-item class="col-12 row no-wrap" style="width: 100%; height: 90px">
            <div class="col-12 row justify-center" style="position: relative; top: -56px">
              <q-img 
                src="LogoAlertFull.png" 
                :width="
                  $q.platform.is.mobile
                  ? '150px'
                  : $q.screen.xl
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
          <div class="col-12 row" :class="$q.platform.is.mobile ? 'q-pr-md q-pl-xs q-pb-sm' : 'q-pb-sm q-px-sm'">
          </div>
          <menu-item-page @click="closeMenu()" />
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LocalStorage } from 'quasar';
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
    localStorage.clear()
    sessionStorage.clear()
    void this.$router.push('/login')
  }
}
</script>