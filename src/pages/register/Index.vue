<template>
  <div class="col-12 row" style="overflow: hidden; position: fixed; width: 100%; top: 0; left: 0 right: 0; bottom: 0;">
    <div class="col-6 row" style="background: url('brand-emge.png')" :style="$q.screen.sm || $q.screen.xs ? 'display: none' : 'width: 50%; height: 100%'">
    </div>
    <q-img src="LogoAlertFull.png" class="absolute-top-left" width="180px" style="left: 2%; top: -38px; cursor: pointer; z-index: 0"></q-img>
    <div :class="$q.screen.sm || $q.screen.xs ? 'col-12 row bg-white' : 'col-6 row bg-white'" :style="$q.screen.sm || $q.screen.xs ? '' : 'width: 50%'">
      <div class="col-12 row">
        <div class="col-12 row justify-end q-px-md">
          <div v-if="$q.screen.sm || $q.screen.xs" class="col row justify-end q-pt-md q-px-md">
            <div class="col-12 row text-right q-pt-sm justify-end text-subtitle2 text-black">Já possui cadastro?</div>
            <div @click="$router.push('/login')" class="col-12 row text-primary text-right justify-end text-bold cursor-pointer" style="text-decoration: underline;">ACESSE SUA CONTA</div>
          </div>
          <div v-else class="col-auto row">
            <q-item-label class="col-auto row justify-end q-pt-md q-px-lg text-h6 text-black">Já possui cadastro? <span class="text-primary text-bold q-px-xs cursor-pointer" style="text-decoration: underline;" @click="$router.push('/login')">ACESSE SUA CONTA</span></q-item-label>
          </div>
        </div>
      </div>
      <div class="col-12 row q-pt-md" style="height: 90%;">
        <div class="col-12 row">
          <q-item-label class="col-12 row q-ml-xl q-py-md q-px-lg text-h3 text-primary text-weight-bold my-font" style="height:">
            Cadastro
          </q-item-label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class RegisterIndex extends AbstractComponent {

}
</script>