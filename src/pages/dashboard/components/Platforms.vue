<template>
  <div class="col-12 row justify-between items-center" :style="$q.screen.xl || $q.screen.lg ? 'height: 120px' : 'height: 250px'">
    <div class="col-auto row" :class="$q.screen.xs ? 'col-12 row justify-center q-pt-md' : ''">
      <q-img src="logoEmge.png" width="150px" height="80px"/>
    </div>
    <div class="col-auto row items-center" :class="$q.screen.xs ? 'col-12 row justify-around' : ''" style="height: 80%;">
      <q-card :class="$q.screen.xs ? '' : 'q-mr-xl'" style="width: 120px;" :style="$q.screen.xl || $q.screen.lg ? 'width: 120px; height: 100%;' : 'width: 160px; height: 160px'">
        <a href="https://portal.domhelder.edu.br/portal/home" target="_blank" style="text-decoration: none; color: black">
          <div class="col-12 row justify-center" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pt-md' : 'q-pt-sm'">
            <q-icon name="r_school" size="35px" />
          </div>
          <div class="col-12 row justify-center" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pt-xl' : 'q-pt-md'">
            <q-item-label :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'text-h7' : 'text-h7'">
              Portal acadêmico
            </q-item-label>
          </div>
        </a>
      </q-card>
      <q-card :class="$q.screen.xl ? 'q-mr-xl' : $q.screen.lg ? 'q-mr-sm' : $q.screen.xs ? '' : 'q-mr-xl'" :style="$q.screen.xl || $q.screen.lg ? 'width: 120px; height: 100%;' : 'width: 160px; height: 160px'">
        <a href="https://ead.emge.edu.br/login/index.php" target="_blank" style="text-decoration: none; color: black">
          <div class="col-12 row justify-center" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pt-md' : 'q-pt-sm'">
            <q-icon name="r_home" size="35px" />
          </div>
          <div class="col-12 row justify-center" :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'q-pt-xl' : 'q-pt-md'">
            <q-item-label :class="$q.screen.md || $q.screen.sm || $q.screen.xs ? 'text-h7' : 'text-h7'">
              Moodle
            </q-item-label>
          </div>
        </a>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class NextAlert extends AbstractComponent {

}
</script>