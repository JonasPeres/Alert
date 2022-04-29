<template>
  <div class="col-12 row" style="overflow: hidden; position: fixed; width: 100%; top: 0; left: 0 right: 0; bottom: 0;">
    <div class="col-6 row" style="background: url('brand-emge.png')" :style="$q.screen.sm || $q.screen.xs ? 'display: none' : 'width: 50%; height: 100%'">
    </div>
    <q-img src="LogoAlertFull.png" class="absolute-top-left" width="180px" style="left: 2%; top: -38px; cursor: pointer; z-index: 0"></q-img>
    <div v-if="step === 0" :class="$q.screen.sm || $q.screen.xs ? 'col-12 row bg-white' : 'col-6 row bg-white'" :style="$q.screen.sm || $q.screen.xs ? '' : 'width: 50%'">
      <div class="col-12 row">
        <div class="col-12 row justify-end q-px-md">
          <div v-if="$q.screen.sm || $q.screen.xs" class="col row justify-end q-pt-md q-px-md">
            <div class="col-12 row text-right q-pt-sm justify-end text-subtitle2 text-black">Já possui cadastro?</div>
            <div @click="$router.push('/login')" class="col-12 row text-primary text-right justify-end text-bold cursor-pointer" style="text-decoration: underline;">ACESSE SUA CONTA</div>
          </div>
          <div v-else class="col-auto row">
            <q-item-label class="col-auto row justify-end q-pt-md q-px-lg text-h6 text-black">Já possui cadastro? <span class="text-primary text-bold q-px-xs cursor-pointer" style="text-decoration: underline;" @click="$router.push('/login')">ACESSE SUA CONTA</span></q-item-label>
          </div>
        </div>
      </div>
      <div class="col-12 row q-pt-md" style="height: 90%;">
        <div class="col-12 row" style="height: 100px">
          <q-item-label class="col-12 row q-py-md text-h3 text-primary text-weight-bold" :class="$q.screen.sm || $q.screen.xs ? 'justify-center' : 'q-ml-xl q-py-md q-px-lg'">
            Cadastro
          </q-item-label>
          <div class="col-12 row q-pt-xl" :class="$q.screen.sm || $q.screen.xs ? 'q-px-md' : 'q-pl-xl'">
            <div class="col-12 row q-gutter-md" :class="$q.screen.sm || $q.screen.xs ? '' : 'q-px-lg'">
              <q-radio v-model="person" dense keep-color :color="person === 'A' ? 'primary' : 'grey-4'" class="text-grey-4 text-h6" val="A" label="Aluno" />
              <q-radio v-model="person" dense keep-color :color="person === 'P' ? 'primary' : 'grey-4'" val="P" class="text-grey-4 text-h6"  label="Professor" />
            </div>
            <div v-if="person === 'A'" class="col-12 row q-pt-xl" :class="$q.screen.sm || $q.screen.xs ? '' : 'q-px-lg'">
              <q-form class="col-12 row" @submit="register()">
                <q-input v-model="name" class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 row q-pr-md" label="Nome" color="primary" lazy-rules
                  :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
                />
                <q-input v-model="id" class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 row q-pr-md" label="Matrícula" color="primary" lazy-rules
                  :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
                />
                <q-checkbox v-model="confirm" label="Gostaria de receber alertas pelo e-mail pessoa?" />
                <q-input v-if="confirm === true" v-model="email" class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 row q-pr-md" label="E-mail pessoal" color="primary"
                  :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
                />
                <div class="col-12 row q-pt-xl justify-end q-px-lg">
                  <q-btn color="primary" text-color="white" label="Enviar" type="submit" :size="$q.screen.sm || $q.screen.xs ? '15px' : '20px'">
                    <q-tooltip>
                      Enviar
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-form>
            </div>
            <div v-if="person === 'P'" class="col-12 row q-pt-xl" :class="$q.screen.sm || $q.screen.xs ? '' : 'q-px-lg'">
              <q-form class="col-12 row" @submit="registerP()">
                <q-input v-model="nameP" class="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12 row q-pr-md" label="Nome" color="primary"
                  :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
                />
                <q-input v-model="emailP" class="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12 row q-pr-md" label="E-mail" color="primary" 
                  :rules="[val => val && val.length > 0 || 'Esse campo não pode ficar em branco']"
                />
                <div class="col-12 row q-pt-xl justify-end q-px-lg">
                  <q-btn color="primary" text-color="white" label="Enviar" type="submit" :size="$q.screen.sm || $q.screen.xs ? '15px' : '20px'">
                    <q-tooltip>
                      Enviar
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 1" :class="$q.screen.sm || $q.screen.xs ? 'col-12 row bg-white justify-center' : 'col-6 row bg-white justify-center'" :style="$q.screen.sm || $q.screen.xs ? 'align-items: center;' : 'align-items: center; width: 50%'">
      <div class="col-auto">
        <div class="col-12 row justify-center">
          <q-icon name="r_check_circle" color="green" size="100px"></q-icon>
        </div>
        <div class="col-12 row">
          <q-item-label class="col-12 row q-pt-md q-px-lg text-h6 text-black">Um e-mail será enviado com instruções para criar a senha.</q-item-label>
        </div>
        <div class="col-12 row justify-center q-pt-xl">
          <q-btn color="primary" text-color="white" label="Início" @click="$router.push('/')" :size="$q.screen.sm || $q.screen.xs ? '15px' : '20px'">
            <q-tooltip>
              Voltar para Home
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class RegisterIndex extends AbstractComponent {

  step = 0
  confirm = false
  person = 'A'
  id=''
  name=''
  nameP=''
  email=''
  emailP=''

  register () {
    super.showLoading()
    try {
      this.step = 1
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      super.hideLoading()
    }
  }

  registerP () {
    super.showLoading()
    try {
      this.step = 1
    } catch (error) {
      super.showNotifyErrorCustom(error as string)
    } finally {
      super.hideLoading()
    }
  }
}
</script>