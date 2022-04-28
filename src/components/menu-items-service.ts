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
        icon: 'r_grid_view',
        to: '/dashboard',
        ativo: true,
      },
      {
        title: 'Agenda',
        icon: 's_calendar_month',
        to: '/schedule',
        ativo: false,
      },
      {
        title: 'Sair',
        icon: 'r_logout',
        to: '/login',
        ativo: false,
      },
    ]
  }
}

