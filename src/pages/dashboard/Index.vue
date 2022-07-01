<template>
  <div class="col-12 row q-mt-xl" :class="$q.platform.is.mobile || $q.screen.sm || $q.screen.xs ? 'q-mx-xs  ' : 'q-mx-xl'" :style="$q.screen.md || $q.screen.sm || $q.screen.xs || $q.platform.is.mobile ? 'height: 100vh;' : 'height: 80vh'">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 row q-gutter-md" :class="$q.screen.lg || $q.screen.xl ? 'q-pr-md q-pl-xs' : 'q-pr-xs'" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 100vh' : 'height: 100%'">
      <div class="col-12 row" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? '' : 'height: 50%'">
        <q-card class="col-12 row q-mb-md card q-pl-sm bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 25vh;' : 'height: 47%'">
          <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
            <q-scroll-area class="col-12 row q-pa-sm" style="height: 100%;" visible>
              <div class="col-12 row q-pa-none q-pl-sm no-wrap">
                <q-item-label :style="$q.platform.is.mobile || $q.screen.xs ? 'font-size: 28px' : 'font-size: 26px'" class="text-secondary col-grow row">Próximo alerta</q-item-label>
              </div>
              <div class="col-12 row">
                <NextAlert />
              </div>
            </q-scroll-area>
          </q-card>
        </q-card>
        <q-card class="col-12 row card q-pl-sm bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 35vh;' : 'height: 48%'">
          <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
            <q-scroll-area class="col-12 row q-pa-sm items-center" style="height: 100%;" visible>
              <div class="col-12 row q-pa-none q-pl-sm no-wrap">
                <q-item-label :style="$q.platform.is.mobile || $q.screen.xs ? 'font-size: 28px' : 'font-size: 26px'" class="text-secondary col-grow row">Portais EMGE</q-item-label>
              </div>
              <div class="col-12 row">
                <Platforms />
              </div> 
            </q-scroll-area>
          </q-card>
        </q-card>
      </div>
      <q-card class="col-12 row card q-pl-sm q-mt-md bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 35vh' : 'height: 50%'">
        <q-card class="col-12" style="border-radius: 0 6px 6px 0;">
          <div class="col-12 row q-pa-md" style="height: 100%;">
            <div class="col-12 row q-pa-none q-pl-sm no-wrap" style="height: 10%">
              <q-item-label :style="$q.platform.is.mobile || $q.screen.xs ? 'font-size: 28px' : 'font-size: 30px'" class="text-secondary col-grow row">Bloco de Notas</q-item-label>
            </div>
            <div class="col-12 row" style="height: 90%">
              <Chat />
            </div>
          </div>
        </q-card>
      </q-card>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 row q-pr-xs" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pb-lg q-pt-md' : 'q-pl-md'">
      <q-card class="col-12 row q-pl-sm card bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 40vh' : 'height: 50%'">
        <q-card class="col-12 row" style="border-radius: 0 6px 6px 0;">
          <q-scroll-area class="col-12 row q-pa-sm" style="height: 100%;" visible>
            <Calendar />    
          </q-scroll-area>
        </q-card>
      </q-card>
      <q-card class="col-12 row card q-pl-sm q-mt-md bg-secondary" :style="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'height: 40vh' : 'height: 50%'">
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
import Chat from 'src/pages/dashboard/components/Chat.vue'
import NextAlert from 'src/pages/dashboard/components/NextAlert.vue'
import Calendar from 'src/pages/dashboard/components/Calendar.vue'
import Platforms from 'src/pages/dashboard/components/Platforms.vue'

@Options({
  components: {
    Carousel,
    NextAlert,
    Calendar,
    Platforms,
    Chat
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