<template>
  <div class="fullscreen flex flex-center">
    <div class="col-12 row">
      <div class="col-12 row justify-center">
        <q-img src="AlertIconFull.png" height="250px" width="600px" />
      </div>
      <div class="col-12 row q-pt-xl justify-center">
        <div class="col-12 row text-h3 justify-center" >
          Ops... Nada aqui
        </div>
        <q-btn
          class="q-mt-xl"
          color="primary"
          text-color="white"
          unelevated
          size="20px"
          to="/home"
          label="Voltar"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Error404 extends Vue {}
</script>
