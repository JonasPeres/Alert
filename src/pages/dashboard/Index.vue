<template>
  <div class="col-12 row q-mt-xl" :class="$q.platform.is.mobile || $q.screen.sm || $q.screen.xs ? 'q-mx-xs  ' : 'q-mx-xl'" :style="$q.screen.md || $q.screen.sm || $q.screen.xs || $q.platform.is.mobile ? 'min-height: 80vh; padding-bottom: 100px' : 'height: 80vh'">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 row q-gutter-md" :class="$q.screen.lg || $q.screen.xl ? 'q-pr-md q-pl-xs' : 'q-pr-xs'" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'min-height: 100%' : 'height: 100%'">
      <div class="col-12 row" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'min-height: 50%' : 'height: 50%'">
        <q-card class="col-12 row q-mb-md card q-pl-sm bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 47%;' : isEscrow && role === 'user'  ? 'height: 50%' : 'height: 47%'">
          <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
            <div class="col-12 row q-pa-md">
              
            </div>
          </q-card>
        </q-card>
        <q-card class="col-12 row card q-pl-sm bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs || $q.platform.is.mobile ? 'min-height: 50%; margin-bottom: 20%' : 'height: 48%'">
          <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
            <div class="col-12 row q-pa-md">
              
            </div>
          </q-card>
        </q-card>
      </div>
      <q-card class="col-12 row card q-pl-sm bg-secondary q-mt-md" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'min-height: 50%' : 'height: 50%'">
        <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
          <div class="col-12 row q-pa-md">
            <div class="col-12 row q-pa-none q-pl-md no-wrap items-center" style="height: 10%">
              <q-item-label :style="$q.platform.is.mobile || $q.screen.xs ? 'font-size: 28px' : 'font-size: 30px'" class="text-secondary col-grow row"> </q-item-label>
            </div>
            <div class="col-12 row items-center">
              
            </div>
          </div>
        </q-card>
      </q-card>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 row q-pr-xs" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pb-lg' : 'q-pl-md'" :style="!isEscrow && role !== 'user' && $q.screen.md ? 'padding-top: 11%' : !isEscrow && role !== 'user' && $q.screen.sm ? 'padding-top: 12%' : !isEscrow && role !== 'user' && $q.screen.xs ? 'padding-top: 20%' : isEscrow && $q.screen.md || $q.screen.sm || $q.screen.xs ? 'padding-top: 2%' : role === 'user' && $q.screen.md || $q.screen.sm || $q.screen.xs ? 'padding-top: 2%' : ''">
      <q-card class="col-12 row q-mb-md q-pl-sm card bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'min-height: 50%' : 'height: 50%'">
        <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
          <div class="col-12 row">
            <div class="col-12 row no-wrap items-center q-px-md" >
              <q-item-label :style="$q.platform.is.mobile || $q.screen.xs ? 'font-size: 28px' : 'font-size: 30px'" class="text-secondary col row"> </q-item-label>
            </div>
            <div class="col-12 row justify-center">
              
            </div>
          </div>
        </q-card>
      </q-card>
      <q-card class="col-12 row card q-pl-sm bg-secondary" :class="$q.screen.md ? 'q-mt-xs' : ''" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'min-height: 30vh' : 'height: 50%'">
        <q-card class="col-12" style="border-radius: 0 6px 6px 0;">
          <div class="col-12 row" style="height: 100%">
            <Carousel />
          </div>
        </q-card>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'
import { Options } from 'vue-class-component'
import Carousel from 'src/pages/dashboard/components/Carousel.vue'

@Options({
  components: {
    Carousel
  }
})

export default class DashBoardIndex extends AbstractComponent {

}
</script>

<style lang="scss">
  .card {
    border-radius: 8px;
  }
</style>