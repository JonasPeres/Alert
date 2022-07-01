<template>
  <div class="col-12 row q-pa-md" style="height: 100%">
    <q-input class="col-12 row q-px-sm" filled v-model="text" type="textarea" color="secondary" v-on:keypress="pattern($event, 'alphanumeric')" style="min-height: 100%; max-height: 90%;"/>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class Carousel extends AbstractComponent {

}
</script>

<style lang="scss">
.q-textarea .q-field__control {
  min-height: 100%;
  max-height: 90%;
}
.q-textarea .q-field__inner {
  min-height: 100%;
  max-height: 90%;
}
.q-textarea .q-field__control-container {
  min-height: 100%;
  max-height: 90%;
}
.q-textarea .q-field__native {
  min-height: 100%;
  max-height: 90%;
}
</style>