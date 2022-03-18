<template>
  <q-layout view="hHh lpR fFf" class="bg-white">

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
  background-color: #ce0a0c;
  border-radius: 15px;
}
</style>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class LoggedLayout extends AbstractComponent {

}
</script>