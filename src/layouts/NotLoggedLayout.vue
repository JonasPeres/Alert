<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">
    <q-header class="text-black col-12 row justify-between no-wrap items-center bg-white" style="height: 90px">
      <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center q-pa-md q-ml-lg'
            : 'col-auto row items-center q-pa-md'
        "
      >
        <q-img 
          @click="redirectRoute('login')"
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
      <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center q-pa-md q-mr-lg'
            : 'col-auto row items-center q-pa-md'
        "
      >
        <q-img
          src="LogoEmge.png" 
          :width="
            $q.platform.is.mobile
            ? '110px'
            : $q.screen.xl
            ? '150px'
            : $q.screen.lg
            ? '150px'
            : $q.screen.md
            ? '150px'
            : $q.screen.sm
            ? '130px'
            : '90px'
          " 
          style="cursor: pointer;" 
        />
        <q-icon name="r_add" size="30px" color="primary"></q-icon>
        <q-img
          src="LogoDomHelder.png" 
          :width="
            $q.platform.is.mobile
            ? '110px'
            : $q.screen.xl
            ? '200px'
            : $q.screen.lg
            ? '200px'
            : $q.screen.md
            ? '200px'
            : $q.screen.sm
            ? '180px'
            : '90px'
          " 
          style="cursor: pointer;" 
        />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

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
import AbstractComponent from 'src/components/abstract-component'

export default class NotLoggedLayout extends AbstractComponent {

}
</script>