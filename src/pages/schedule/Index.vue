<template>
  <div class="col-12 row items-center q-my-lg" :class="$q.platform.is.mobile || $q.screen.xs ? 'q-mx-sm' : 'q-mx-xl'" style="height: 80vh">
    <q-card class="col-12 q-mt-md" style="border-radius: 20px; height: 100%">
      <div class="col-12 row q-mx-md q-mt-lg">
        <div class="col-12 row q-py-md q-px-md justify-end items-center">
          <q-btn label="Novo alerta" text-color="white" color="primary" size="15px" icon="add" @click="popupFavored = true">
            <q-tooltip>
              Adicionar novo alerta
            </q-tooltip>
          </q-btn>
        </div>
        <q-separator class="col-12 row" size="2px"></q-separator>
        <q-list class="col-12 q-pt-md">
          <div class="col-12 row q-pb-md">
            <q-card v-for="(favored, index) in favoreds" :key="index" class="col-12 row q-pl-sm bg-secondary q-my-sm" style="max-width: 100%">
              <q-card class="col-12 row" >
                <div class="col-12 row q-pa-md">
                  <div class="col-12 row items-center q-pb-md" style="max-width: 100%">
                    <q-item-label class="col-12 row text-h5 q-pl-sm text-secondary justify-between">{{favored.alertData}} <q-icon name="delete" color="secondary" size="25px" style="cursor: pointer;" @click="deleteFav(favored.dateNow)"/></q-item-label>
                    <q-item-label class="col-12 row text-h6 q-pl-sm text-secondary">{{favored.name}}</q-item-label>
                    <q-item-label class="col-12 row q-pl-sm text-black q-pt-md">{{favored.text}}</q-item-label>
                  </div>
                </div>
              </q-card>
            </q-card>
          </div>
        </q-list>
        <q-dialog v-model="popupDelete" >
          <q-card style="max-width: 1500px; width: 700px; border-radius: 15px">
            <div class="col-12 row q-py-md" style="border-radius: 15px">
              <q-card-section class="col-12 row q-px-lg q-pb-sm no-wrap items-center">
                <q-item-label :class="$q.platform.is.mobile || $q.screen.xs ? 'text-h5' : 'text-h4'" class="text-secondary text-weight-bold col-grow row">Excluir Pagador</q-item-label>
                <q-btn icon="close" color="secondary" size="20px" flat v-close-popup>
                  <q-tooltip>
                    Fechar
                  </q-tooltip>
                </q-btn>
              </q-card-section>
              <div class="col-12 row q-pa-md justify-center">
                <q-icon name="warning" color="secondary" size="80px"/>
                <q-item-label :class="$q.screen.xs || $q.platform.is.mobile ? 'text-h5' : 'text-h4'" class="text-secondary text-weight-bold col-12 row justify-center q-pt-md">Deseja excluir?</q-item-label>
                <q-item-label :class="$q.screen.xs || $q.platform.is.mobile ? 'text-h6' : 'text-h5'" class="text-secondary text-weight-medium col-12 row justify-center">Não poderá ser desfeito</q-item-label>
              </div>
              <div class="col-12 row q-pt-xl justify-end q-px-md">
                <q-btn flat color="secondary" label="Cancelar" :size="$q.platform.is.mobile ? '15px' : '20px'" v-close-popup  />
                <q-btn color="primary" text-color="secondary" label="Excluir" :size="$q.platform.is.mobile ? '15px' : '20px'" />
              </div>
            </div>
          </q-card>
        </q-dialog>
        <q-dialog v-model="popupFavored" >
          <q-card style="max-width: 1500px; width: 700px; border-radius: 15px">
            <div class="col-12 row q-py-md" style="border-radius: 15px">
              <q-card-section class="col-12 row q-px-lg q-pb-lg no-wrap items-center">
                <q-item-label :class="$q.screen.xs || $q.platform.is.mobile ? 'text-h5' : 'text-h4'" class="text-secondary text-weight-bold col-grow row">{{'Novo Alerta'}}</q-item-label>
                <q-btn icon="close" color="secondary" size="20px" flat v-close-popup>
                  <q-tooltip>
                    Fechar
                  </q-tooltip>
                </q-btn>
              </q-card-section>
              <Favored @hide-popup="closePopup()" @get-data="getData"/>
            </div>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'
import { Options } from 'vue-class-component'
import Favored from 'src/pages/schedule/alert.vue'
import Alert from 'src/interfaces/alert-interface'

@Options({
  components: {
    Favored,
  }
})

export default class Transfer extends AbstractComponent {
  favoreds = [] as Alert[]
  filter = ''
  transferBeneficiary = {}
  transferP2P = {}
  favoredEdit = {}
  favoredDelete = {}
  favoredP2PEdit = {}
  popupFavored = false
  popupTransfer = false
  popupDelete = false
  edit = false

  hidePopupTransfer () {
    this.popupTransfer = false
    this.transferBeneficiary = {}
    this.transferP2P = {}
  }

  openPopupDelete(fav: string) {
    this.favoredDelete = fav
    this.popupDelete = true
  }

  deleteFav (value: string) {
    super.showLoading()
    try {
      this.favoreds = this.favoreds.filter((e) => {
        return e.dateNow !== value
      })
      super.showNotifySuccess('Alerta deletado com sucesso!')
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      this.popupDelete = false
      super.hideLoading()
    }
  }

  editFav (fav: string) {
    if (fav) {
      this.favoredEdit = fav
      this.favoredP2PEdit = {}
    } else {
      this.favoredP2PEdit = fav
      this.favoredEdit = {}
    }
    this.edit = true
    this.popupFavored = true
  }

  newFav () {
    this.favoredEdit = {}
    this.favoredP2PEdit = {}
    this.edit = false
    this.popupFavored = true
  }

  closePopup() {
    super.showLoading()
    try {
      this.popupFavored = false
      this.popupDelete = false
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      super.hideLoading()
    }
  }

  getData(value: {
    name: string,
    alertData: string,
    text: string,
    dateNow: string
  }) {
    console.log(value)
    super.showNotifySuccess('Alerta cadastrado com sucesso!')
    this.favoreds.push(value)
  }
};
</script>
