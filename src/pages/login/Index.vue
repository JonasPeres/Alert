<template>
  <div>
    <div class="col-12 row">
      <q-page class="col-grow row">
        <q-carousel
          v-model="slide"
          animated
          class="col-12"
          height="100%"
        >
          <q-carousel-slide name="login" class="col-12 row" img-src="dhc-emge.jpg">
            <div class="col-12 row justify-center">
              <div v-if="$q.screen.xl || $q.screen.lg || $q.screen.md || $q.screen.sm" class="absolute-top-left q-pt-md q-pl-md">
                <q-btn to="/" icon="arrow_back" class="q-px-sm col-auto" flat no-caps text-color="primary" size="35px" dense style="height: 40px" />
              </div>
              <div v-else class="absolute-top-left">
                <q-btn to="/" icon="arrow_back" class="q-px-sm col-auto" flat no-caps text-color="primary" size="25px" dense style="height: 40px" />
              </div>
              <div v-if="$q.screen.xl || $q.screen.lg || $q.screen.md" class="my-img">
                <q-img
                  @click="redirectRoute('login')"
                  src="LogoAlertFull.png" 
                  width="400px"
                  height="300px"
                  style="cursor: pointer;" 
                />
              </div>
              <div v-else-if="$q.screen.sm || $q.screen.xs" class="my-img-xs">
                <q-img
                  @click="redirectRoute('login')"
                  src="LogoAlertFull.png" 
                  width="300px"
                  height="200px"
                  style="cursor: pointer;" 
                />
              </div>
            </div>
            <div class="col-12 row q-pt-xl justify-center">
              <q-form class="" style="width: 400px;" @submit="login">
                <div class="col-12 row justify-start">
                  <q-item-label class="text-h4 text-black q-pb-lg">Acesse sua conta</q-item-label>
                </div>
                <div class="q-gutter-md">
                  <q-radio v-model="person" dense keep-color :color="person === 'A' ? 'primary' : 'grey-4'" class="text-grey-4 text-h6" val="A" label="Aluno" />
                  <q-radio v-model="person" dense keep-color :color="person === 'P' ? 'primary' : 'grey-4'" val="P" class="text-grey-4 text-h6"  label="Professor" />
                </div>
                <q-input
                  v-if="person === 'A'"
                  v-model="loginUser" 
                  class="col-xl-6 col-lg-8 col-md-6 col-sm-6 col-xs-12 row q-py-md text-subtitle1"
                  color="black"
                  dark 
                  label="Matrícula" 
                  lazy-rules
                  maxlength="6"
                  :rules="[
                    val => val && val.length > 0 || 'Esse campo não pode ficar em branco',
                    val => val && val.length == 6 || 'O número de matrícula deve conter 6 dígitos'
                  ]"
                >
                </q-input>
                <q-input 
                  v-if="person === 'P'"
                  v-model="loginUser" 
                  class="col-xl-6 col-lg-8 col-md-6 col-sm-6 col-xs-12 row q-py-md text-subtitle1"
                  color="black"
                  dark 
                  label="E-mail" 
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Esse campo não pode ficar em branco',
                    val => val && val.length == 6 || 'O número de matrícula deve conter 6 dígitos'
                  ]"
                >
                </q-input>
                <q-input 
                  v-model="password" 
                  class="col-xl-6 col-lg-8 col-md-6 col-sm-6 col-xs-12 row q-py-md text-subtitle1"
                  color="black"
                  dark 
                  label="Senha"
                  :type="isPwd ? 'password' : 'text'"
                  lazy-rules
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
                <q-btn label="Entrar" color="black" type="submit" class="full-width q-my-md" text-color="primary" size="17px"  />
              </q-form>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-page>
    </div>
    <q-dialog v-model="popupForgotPass">
      <q-card style="max-width: 1500px; width: 900px; border-radius: 15px">
        <div class="col-12 row q-py-md" style="border-radius: 15px">
          <q-card-section class="col-12 row q-px-lg q-pb-sm no-wrap items-center">
            <q-item-label class="text-secondary text-weight-bold col-grow row" :class="$q.screen.sm || $q.screen.xs ? 'text-h5' : 'text-h4'">Esqueci minha senha</q-item-label>
            <q-btn icon="close" color="secondary" size="20px" flat v-close-popup>
              <q-tooltip>
                Fechar
              </q-tooltip>
            </q-btn>
          </q-card-section>
          <q-form class="col-12 row q-pa-lg">
            <div class="col-12 row q-pb-md">
              <q-item-label class="text-weight-bold col-grow row" :class="$q.screen.sm || $q.screen.xs ? 'text-h7' : 'text-h6'">Um e-mail será enviado com instruções para resetar sua senha</q-item-label>
            </div>
            <div class="q-gutter-md">
              <q-radio v-model="personReset" dense keep-color :color="personReset === 'A' ? 'primary' : 'black'" class="text-black text-h6" val="A" label="Aluno" />
              <q-radio v-model="personReset" dense keep-color :color="personReset === 'P' ? 'primary' : 'black'" val="P" class="text-black text-h6"  label="Professor" />
            </div>
            <q-input 
              v-if="personReset === 'A'"
              v-model="loginUserReset" 
              color="secondary"
              class="col-12 row q-py-sm text-subtitle1"
              label="Matrícula"
              maxlength="6"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
            >
            </q-input>
            <q-input 
              v-if="personReset === 'P'"
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
            <q-btn flat color="secondary" label="Cancelar" :size="$q.screen.sm || $q.screen.xs ? '15px' : '20px'"  v-close-popup>
              <q-tooltip>
                Fechar
              </q-tooltip>
            </q-btn>
            <q-btn color="primary" text-color="white" label="Enviar e-mail"  :size="$q.screen.sm || $q.screen.xs ? '15px' : '20px'">
              <q-tooltip>
                Enviar E-mail
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LocalStorage } from 'quasar';

export default class LoginIndex extends AbstractComponent {

  person = 'A'
  personReset = 'A'
  popupForgotPass = false
  isPwd = true
  loginUser = ''
  password = ''
  loginUserReset = ''
  slide = 'login'

  login () {
    super.showLoading()
    try {
      localStorage.setItem('usuario', this.loginUser)
      localStorage.setItem('person', this.person)
      localStorage.setItem('login', 'true')
      void this.$router.push('/dashboard')
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      super.hideLoading()
    }
  }

}
</script>

<style lang="scss">
  .my-img {
    width: 400px;
    height: 1px;
  }

  .my-img-xs {
    width: 300px;
    height: 1px;
  }
</style>