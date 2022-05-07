<template>
  <div class="col-12 row q-px-md" :class="$q.screen.xs ? 'justify-start' : 'justify-between'" :style="$q.screen.xs ? 'min-height: 300px' : ''">
    <q-tab-panels
      :style="$q.screen.xs ? 'width: 100%' : 'max-width: 160px'"
      v-model="date"
      animated
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel style="height: 100%" :name="date">
        <div class="text-h5 q-mb-xl">
          {{ date.split('/').reverse().join('/') }}
          <q-icon v-if="$q.screen.xs" name="event" class="cursor-pointer q-pt-md absolute-right" size="35px" color="secondary">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="date" :events="events" event-color="orange">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="oK" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </div>
        <div v-if="date === '2022/06/01'" class="text-h7 q-pb-md"><b>Reunião</b></div>
        <div v-if="date === '2022/06/01'" class="text-h7"><b>Movimento Ecos</b></div>
        <div v-if="date === '2022/06/05'" class="text-h7 q-pb-md"><b>Entrega do trabalho</b></div>
        <div v-if="date === '2022/06/05'" class="text-h7"><b>Projeto Interdisciplinar II</b></div>
        <div v-if="date === '2022/06/06'" class="text-h7 q-pb-md"><b>Prova</b></div>
        <div v-if="date === '2022/06/06'" class="text-h7"><b>Linguagens de programação</b></div>
        <div v-if="date === '2022/06/01' || date === '2022/06/05' || date === '2022/06/06'" class="col-12 row q-pb-md justify-center absolute-bottom">
          <q-btn to="/schedule" class="text-secondary" flat>Ver na agenda</q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <q-date
      v-if="!$q.screen.xs"
      v-model="date"
      :events="events"
      event-color="orange"
      style="height: 360px"
    />
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class Calendar extends AbstractComponent {

  date= '2022/06/01'
  events= [ '2022/06/01', '2022/06/05', '2022/06/06' ]
}
</script>