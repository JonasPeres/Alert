<template>
   <div class="col-12 row">
    <q-form @submit="send(alertDados)" class="col-12 row q-px-md">
      <div class="col-12 row q-py-xs">
        <q-input v-model="alertDados.name" class="col-12 row q-px-sm" label="Nome do alerta" color="secondary" v-on:keypress="pattern($event, 'alphanumeric')"
          :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
          lazy-rules
        />
      </div>
      <div class="col-12 row q-pb-xs q-pt-md">
        <q-input v-model="alertDados.alertData" mask="##/##/####" readonly class="col-12 row q-px-sm" label="Data do alerta" color="secondary"
          @focus="focus"
          @blur="blur"
          type="text"
          :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
          lazy-rules
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="alertDados.alertData" mask="DD/MM/YYYY" :options="optionsFn" >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="oK" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 row q-py-xs">
        <q-input class="col-12 row q-px-sm" v-model="alertDados.text" autogrow type="textarea" label="Mensagem do alerta" color="secondary" v-on:keypress="pattern($event, 'alphanumeric')"
          :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
          lazy-rules
        />
      </div>
      <div class="col-12 row q-pb-xs q-pt-md">
        
      </div>
      <div class="col-12 row justify-end" :class="$q.platform.is.mobile ? 'q-pt-xl' : 'q-pt-lg'">
        <q-btn flat color="secondary" label="Cancelar" :size="$q.platform.is.mobile ? '15px' : '20px'" @click="hidePopup()" />
        <q-btn color="primary" text-color="white" type="submit" :label="'Salvar'"  :size="$q.platform.is.mobile ? '15px' : '20px'" />
      </div>
    </q-form>
  </div>
</template>


<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'
import moment from 'moment'

export default class Favored extends AbstractComponent {
  type = 'text'
  alertDados = {
    name: '',
    alertData: '',
    text: '',
    dateNow: ''
  }

  focus () {
    setTimeout(() => {
      this.type = 'tel'
    }, 1);
  }

  blur () {
    this.type = 'text'
  }

  send (value: {
    name: string,
    alertData: string,
    text: string,
  }) {
    const dateNow = moment(new Date())
    this.alertDados.dateNow = dateNow.toString()
    this.$emit('get-data', value)
    this.hidePopup()
  }

  hidePopup () {
    this.$emit('hide-popup')
  }

  optionsFn (data: string) {
    const dateNow = moment(new Date()).format('YYYY/MM/DD')
    return data >= dateNow
  }
};
</script>
