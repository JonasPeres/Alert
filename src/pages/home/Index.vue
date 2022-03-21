<template>
  <div>
    <div class="col-12 row" id="home">
      <q-page class="bg-image col-grow row">
        <q-carousel
          v-model="slideHome"
          animated
          class="col-12"
          height="100%"
        >
          <q-carousel-slide name="home" class="col-12 row no-wrap" :class="$q.platform.is.mobile ? 'q-pa-none' : ''" img-src="frente-dhc-emge.jpg" >
          </q-carousel-slide>
        </q-carousel>
      </q-page>
    </div>
  </div>
</template>

<style>
  .bg-image {
    width: 100%;
  }
</style>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomeIndex extends Vue {

  slideHome = 'home'

}
</script>