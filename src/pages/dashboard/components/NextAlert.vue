<template>
  <div class="col-12 row justify-center q-pa-sm" style="height: 100%">
    <q-card class="my-card" style="width: 100%;">
      <q-card-section class="col-12 row text-black" :class="$q.screen.xs ? 'justify-center' : 'justify-between'">
        <div :class="$q.screen.xs ? 'col-12 justify-center' : 'col-auto'">
          <div class="text-h6">Prova Parcial 2 - AOCIII</div>
          <div class="text-subtitle2">Amanhã</div>
        </div>
        <div class="col-auto" :class="$q.screen.xs ? 'q-pt-md' : ''">
          <a href="https://ead.emge.edu.br/course/view.php?id=520&section=4" target="_blank" style="text-decoration: none; color: black">
            <q-btn class="text-secondary" flat>Ver evento</q-btn>
          </a>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class NextAlert extends AbstractComponent {

}
</script>