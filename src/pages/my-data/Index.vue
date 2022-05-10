<template>
  <div class="col-12 row q-my-xl " :class="$q.platform.is.mobile || $q.screen.xs || $q.screen.sm ? 'q-mx-md' : 'q-mx-xl'">
    <q-card class="col-12 row q-pl-sm q-mb-sm q-mt-xs bg-secondary" style="border-radius: 10px">
      <q-card class="col-12 row" style="background-color: #EDECF9; border-radius: 0 10px 10px 0;">
        <div class="col-12 row q-pa-md text-subtitle1 items-center">
            Para alterar algum dado abaixo entre em contato com a central de relacionamento. 
        </div>
      </q-card>
    </q-card>
    <q-card class="col-12 row q-mt-md q-pa-md" style="border-radius: 10px">
      <div class="col-12 row q-py-md">
        <q-item-label class="col-12 row text-h5 text-secondary">Nome</q-item-label>
        <q-item-label class="col-12 row text-h6">
          {{
            usuario === 'e01437' ? 'Jonas Rodrigues Carvalho Peres' :
            usuario === 'E01437' ? 'Jonas Rodrigues Carvalho Peres' : 
            usuario === 'e01384' ? 'Juliana Parreira Amarante de Mendonça Kill' :
            usuario === 'E01384' ? 'Juliana Parreira Amarante de Mendonça Kill' : usuario
          }}
        </q-item-label>
      </div>
      <div class="col-12 row q-py-md">
        <q-item-label class="col-12 row text-h5 text-secondary">E-mail acadêmico</q-item-label>
        <q-item-label class="col-12 row text-h6">{{`${usuario}@academico.emge.edu.br`}}</q-item-label>
      </div>
      <div class="col-12 row q-py-md">
        <q-item-label class="col-12 row text-h5 text-secondary">E-mail pessoal</q-item-label>
        <q-item-label class="col-12 row text-h6">
          {{
            usuario === 'e01437' ? 'jonasperes10@hotmail.com' :
            usuario === 'E01437' ? 'jonasperes10@hotmail.com' : 
            usuario === 'e01384' ? 'amarante.kill@gmail.com' :
            usuario === 'E01384' ? 'amarante.kill@gmail.com' : usuario
          }}
        </q-item-label>
      </div>
      <div class="col-12 row q-py-md q-gutter-md">
        <q-btn label="Termos de uso" color="secondary" outline  size="16px" />
        <q-btn label="Alterar senha" @click="popupChangePass = true" color="primary" text-color="white"  size="16px" />
      </div>
    </q-card>
    <q-dialog v-model="popupChangePass">
      <q-card style="max-width: 1500px; width: 900px; border-radius: 15px">
        <div class="col-12 row q-py-md" style="border-radius: 15px">
          <q-card-section class="col-12 row q-px-lg q-pb-sm no-wrap items-center">
            <q-item-label class="text-secondary text-h4 text-weight-bold col-grow row">Esqueci minha senha</q-item-label>
            <q-btn icon="close" color="secondary" size="20px" flat v-close-popup>
              <q-tooltip>
                Fechar
              </q-tooltip>
            </q-btn>
          </q-card-section>
          <q-form class="col-12 row q-pa-lg" @submit="forgotPass()">
            <q-input 
              v-model="oldPass" 
              color="secondary"
              :type="isPwd ? 'password' : 'text'" 
              class="col-12 row q-py-sm text-subtitle1" 
              label="Senha atual"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input 
              v-model="newPass" 
              color="secondary"
              :type="isPwdNew ? 'password' : 'text'" 
              class="col-12 row q-py-sm text-subtitle1" 
              label="Nova senha"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwdNew ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwdNew = !isPwdNew"
                />
              </template>
            </q-input>
            <q-input 
              v-model="confirmPass"
              color="secondary"
              :type="isPwdConfirm ? 'password' : 'text'" 
              class="col-12 row q-py-sm text-subtitle1"
              label="Confirmar nova senha" 
              lazy-rules
              :rules="[
                val => val && val.length > 0 && val === newPass || 'As senhas devem ser iguais']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwdConfirm ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwdConfirm = !isPwdConfirm"
                />
              </template>
            </q-input>
            <div class="col-12 row q-pt-xl justify-end q-px-lg">
              <q-btn flat color="secondary" label="Cancelar" size="20px"  v-close-popup>
                <q-tooltip>
                  Fechar
                </q-tooltip>
              </q-btn>
              <q-btn color="primary" type="submit" text-color="white" label="Alterar" size="20px">
                <q-tooltip>
                  Enviar e-mail
                </q-tooltip>
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class MyDataIndex extends AbstractComponent {

  usuario = ''
  popupChangePass = false
  isPwdConfirm = true
  isPwd = true
  isPwdNew = true
  oldPass = ''
  newPass = ''
  confirmPass = ''

  created () {
    const usuario = localStorage.getItem('usuario')
    if (usuario)
    this.usuario = usuario
  }

  forgotPass () {
    super.showLoading()
    try {
      this.popupChangePass = false
      super.showNotifySuccess('Senha alterada com sucesso')
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      super.hideLoading()
    }
  }
}
</script>