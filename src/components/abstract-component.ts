import { Vue } from 'vue-class-component';
import patternText from 'src/helpers/patternText';

export default class AbstractComponent extends Vue {
  showNotifyError (msg: string) :void {
    this.$q.notify({
      progress: true,
      message: msg,
      type: 'negative',
      group: false,
      timeout: msg && msg.length > 50 ? 10000 : 7000,
    })
  }

  showNotifySuccess (msg: string) {
    this.$q.notify({
      progress: true,
      message: msg,
      type: 'info',
      color: 'green',
      timeout: msg && msg.length > 50 ? 10000 : 7000,
      icon: 'check'
    })
  }

  showNotifyErrorCustom (msg: string) {
    this.$q.notify({
      progress: true,
      message: msg ? msg : 'Ocorreu um erro inesperado.. por favor, tente novamente.',
      type: 'info',
      color: 'negative',
      timeout: msg && msg.length > 50 ? 10000 : 7000,
      icon: 'warning'
    })
  }

  showLoading () {
    this.$q.loading.show({
      spinnerColor: 'secondary'
    })
  }

  hideLoading () {
    this.$q.loading.hide()
  }

  pattern(value: KeyboardEvent, type: string) {
    return patternText(value, type)
  }
}