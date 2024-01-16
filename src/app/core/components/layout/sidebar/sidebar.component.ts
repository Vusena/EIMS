import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'dashboard',     title: 'Dashboard',         icon:'dashboard-icon.png',       class: '' },
  { path: 'individual-conflict',         title: 'Individual Conflict',             icon:'individual-conflict-icon.png',    class: '' },
  { path: 'group-conflict',          title: 'Groups Conflict',              icon:'group-conflicts-icon.png',      class: '' },
  { path: 'gifts-received', title: 'Gifts Recieved',     icon:'gift-icon.png',    class: '' },
  { path: 'gifts-given-out',          title: 'Gifts Given',      icon:'gift-icon.png',  class: '' },
  // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
  // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
  // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  constructor() { }

  

}



