/**
 * Created by lzhan on 2017/9/3.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HotListComponent } from './hot-list.component';
import { HotMenuComponent } from './hot-menu/hot-menu.component';
import { HotMenuGatherComponent } from './hot-menu-gather/hot-menu-gather.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { NewMenuGatherComponent } from './new-menu-gather/new-menu-gather.component';
import { HotListMenuComponent } from './hot-list-menu/hot-list-menu.component';
const routes: Routes = [

  {
    path: 'hot-list',
    component: HotListComponent,
    children: [
      {
        path: 'hot-list-menu',
        component: HotListMenuComponent,
      },
      {
        path: 'hot-menu',
        component: HotMenuComponent,
      },
      {
        path: 'hot-menu-gather',
        component: HotMenuGatherComponent,
      },
      {
        path: 'new-menu',
        component: NewMenuComponent,
      },
      {
        path: 'new-menu-gather',
        component: NewMenuGatherComponent,
      },
      {
        path: '',
        component: HotListMenuComponent,
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotListRoutingModule {
}
