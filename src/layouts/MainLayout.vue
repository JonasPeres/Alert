<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="col-12 row no-wrap justify-between items-center bg-white" :style="$q.platform.is.desktop ? 'height: 90px;' : 'height: 90px;'">
      <div :class="
          $q.screen.xl || $q.screen.lg || $q.screen.md
            ? 'col-auto row items-center q-pa-md q-ml-lg'
            : 'col-auto row items-center q-pa-md'
        "
      >
        <q-img 
          @click="redirectRoute('/')"
          src="LogoAlertFull.png" 
          :width="
            $q.screen.xl
            ? '180px'
            : $q.screen.lg
            ? '180px'
            : $q.screen.md
            ? '180px'
            : $q.screen.sm
            ? '160px'
            : '120px'
          " 
          style="cursor: pointer;" 
        />
      </div>
      <div v-if="$q.screen.xl || $q.screen.lg || $q.screen.md" class="col row no-wrap q-gutter-lg justify-end items-center q-px-lg">
        <q-btn to="/register" class="q-px-sm col-auto" flat no-caps text-color="secondary" size="18px" dense style="height: 40px; font-family: Cursive;" label="Primeiro Acesso" />
        <div>
          <q-separator inset style="height: 30px; width: 2px" color="secondary" />
        </div>
        <q-btn to="/login" class="q-px-sm col-auto" flat no-caps icon="person" text-color="secondary" size="18px" dense style="height: 40px; font-family: Cursive;" label="Login" />
      </div>
      <div v-else class="col-grow row justify-end q-gutter-xs items-center q-px-sm">
        <q-btn
          @click="toggleLeftDrawer()"
          class="q-ml-sm"
          color="secondary"
          dense
          size="18px"
          flat
          icon="menu"
        />
        <q-drawer
          v-model="rightDrawer"
          side="right"
          :breakpoint="500"
          overlay
          width="300"
          class="bg-grey-3"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
            >
              <q-item-section class="text-subtitle1 text-secondary">
                <q-btn to="/register" class="q-px-sm col-auto" flat no-caps text-color="secondary" size="18px" dense style="height: 40px" label="Primeiro Acesso" />
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
            >
              <q-item-section class="text-subtitle1 text-secondary">
                <q-btn to="/login" class="q-px-sm col-auto" flat no-caps icon="person" text-color="secondary" size="18px" dense style="height: 40px" label="Login" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer
      class="bg-accent col-12 row q-py-sm"
      style="width: 100%"
    >
      <q-toolbar class="col-12 row q-px-lg q-pb-sm" style="width: 100%">
        <div class="col-12 row justify-center">
          <q-item-label class="text-white">
            Desenvolvido por JonasPeres
          </q-item-label>
        </div>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<style>
body::-webkit-scrollbar {
  width: 0px;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class MainLayout extends Vue {

  rightDrawer = false
 
  toggleLeftDrawer() {
    this.rightDrawer = !this.rightDrawer;
  }
}
</script>
