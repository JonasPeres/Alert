<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">

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

export default class NotLoggedLayout extends AbstractComponent {

}
</script>