import { Component } from '@angular/core';
import reactiveRoutes from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';

interface MenuItem{
  title: string,
  route: string
}

const reactiveItems = reactiveRoutes[0].children ?? []

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
})
export class SideMenu {

  //Menu Reactive
    reactiveItemsFiltered = reactiveItems.filter((item)=>item.title)

    reactiveMenu:MenuItem[]= this.reactiveItemsFiltered.map((item)=>(
      {
        route: `reactive/${item.path}`,
        title: `${item.title}`
      }
    ))

  //Menu Auth

    authMenu:MenuItem[] = [
      {
        title: 'Registro',
        route:'./auth'
      }
    ];

  //Menu Country

    countryMenu:MenuItem[]= [
      {
        title: 'Países',
        route:'./country'
      }
    ]

}
