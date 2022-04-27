import { MenuItem } from 'src/interfaces/menu-item-interface'
import { Options } from 'vue-class-component'
import AbstractComponent from './abstract-component'

@Options({
  name: 'menu-items-service'
})
export default class MenuItemsService extends AbstractComponent {

  public getMenuItensLoggedUser () :Array<MenuItem> {
    return [
      {
        title: 'Dashboard',
        icon: '',
        to: '/dashboard',
        ativo: true,
      },
      {
        title: 'teste',
        icon: '',
        to: '/teste',
        ativo: false,
      },
      {
        title: 'Sair',
        icon: 'off',
        to: '/login',
        ativo: false,
      },
    ]
  }
}

