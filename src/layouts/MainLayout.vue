<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="col-12 row no-wrap justify-between items-center bg-white"
      :style="$q.platform.is.desktop ? 'height: 90px;' : 'height: 90px;'"
    >
      <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center q-pa-md q-ml-lg'
            : 'col-auto row items-center q-pa-md'
        "
      >
        <q-img 
          @click="redirectRoute('/')"
          src="LogoAlertFull.png" 
          :width="
            $q.platform.is.mobile
            ? '110px'
            : $q.screen.xl
            ? '180px'
            : $q.screen.lg
            ? '180px'
            : $q.screen.md
            ? '180px'
            : $q.screen.sm
            ? '160px'
            : '90px'
          " 
          style="cursor: pointer;" 
        />
      </div>
      <div v-if="$q.platform.is.desktop && !$q.screen.sm && !$q.screen.xs" class="col row no-wrap q-gutter-lg justify-end items-center q-px-lg">
        <div>
          <q-separator inset style="height: 30px; width: 2px" color="secondary" />
        </div>
        <q-btn to="/login" class="q-px-sm col-auto" flat no-caps icon="person" text-color="secondary" size="18px" dense style="height: 40px" label="Login" />
      </div>
      <div
        v-else
        class="col-grow row justify-end q-gutter-xs items-center q-px-sm"
      >
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
              v-if="$q.platform.is.mobile"
              clickable
              v-ripple
              to="/login"
            >
              <q-item-section class="text-subtitle1 text-secondary">
                Login
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
        
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<style>
body::-webkit-scrollbar {
  width: 8px;
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
import { Vue } from 'vue-class-component';

export default class MainLayout extends Vue {

  rightDrawer = false
 
  toggleLeftDrawer() {
    this.rightDrawer = !this.rightDrawer;
  }
}
</script>
