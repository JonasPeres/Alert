<template>
  <div class="col-12 row justify-between items-center q-px-md">
    <q-tab-panels
      class="col-auto"
      style="height: 100%;"
      v-model="date"
      animated
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel :name="date">
        <div class="text-h5 q-mb-xl">{{ date }}</div>
        <div v-if="date === '2022/06/01'" class="text-h7"><b>Reunião</b></div>
        <div v-if="date === '2022/06/01'" class="text-h7"><b>Movimento Ecos</b></div>
        <div class="col-12 row q-pb-md justify-center absolute-bottom">
          <q-btn to="/schedule" class="text-secondary" flat>Ver na agenda</q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <q-date
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