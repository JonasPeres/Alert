<template>
  <q-page class="col-12 row justify-center flex flex-center bg-accent q-pb-md">
    <q-form class="col-xl-3 col-lg-3 col-md-6 col-sm-10 col-xs-10" @submit="login">
      <q-item-label class="text-h4 text-primary q-pb-lg">Acesse sua conta</q-item-label>
      <q-input 
        v-model="loginUser" 
        dark
        class="col-xl-6 col-lg-8 col-md-6 col-sm-6 col-xs-12 row q-py-md text-subtitle1" 
        label="E-mail" 
        color="white"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Esse campo não pode ficar em branco'
        ]"
      >
      </q-input>
      <q-input 
        v-model="password" 
        class="col-xl-6 col-lg-8 col-md-6 col-sm-6 col-xs-12 row q-py-md text-subtitle1" 
        :type="isPwd ? 'password' : 'text'"
        label="Senha"
        color="white"
        dark
        :rules="[
          val => val && val.length > 0 || 'Esse campo não pode ficar em branco'
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn flat dense no-caps class="text-grey-4 q-mt-md" @click="popupForgotPass = true">Esqueci minha senha</q-btn>
      <q-btn label="Entrar" color="primary" type="submit" class="full-width q-my-md" text-color="white" size="17px"  />
    </q-form>
    <q-dialog v-model="popupForgotPass">
      <q-card style="max-width: 1500px; width: 900px; border-radius: 15px">
        <div class="col-12 row q-py-md" style="border-radius: 15px">
          <q-card-section class="col-12 row q-px-lg q-pb-sm no-wrap items-center">
            <q-item-label class="text-secondary text-weight-bold col-grow row" :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'">Esqueci minha senha</q-item-label>
            <q-btn icon="close" color="secondary" size="20px" flat v-close-popup>
              <q-tooltip>
                Fechar
              </q-tooltip>
            </q-btn>
          </q-card-section>
          <q-form class="col-12 row q-pa-lg">
            <div class="col-12 row q-pb-md">
              <q-item-label class="text-weight-bold col-grow row" :class="$q.platform.is.mobile ? 'text-h7' : 'text-h6'">Um e-mail será enviado com instruções para resetar sua senha</q-item-label>
            </div>
            <q-input 
              v-model="loginUserReset" 
              color="secondary"
              class="col-12 row q-py-sm text-subtitle1"
              label="E-mail" 
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
            >
            </q-input>
          </q-form>
          <div class="col-12 row q-pt-xl justify-end q-px-lg">
            <q-btn flat color="secondary" label="Cancelar" :size="$q.platform.is.mobile ? '15px' : '20px'"  v-close-popup>
              <q-tooltip>
                Fechar
              </q-tooltip>
            </q-btn>
            <q-btn color="primary" text-color="white" label="Enviar e-mail"  :size="$q.platform.is.mobile ? '15px' : '20px'">
              <q-tooltip>
                Enviar E-mail
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class LoginIndex extends AbstractComponent {

  popupForgotPass = false
  isPwd = true
  loginUser = ''
  password = ''
  loginUserReset = ''

  login () {
    void this.$router.push('/dashboard')
  }

}
</script>