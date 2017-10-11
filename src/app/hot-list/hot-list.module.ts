import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HotListComponent } from './hot-list.component';
// 导入分页插件
import {Ng2PaginationModule} from 'ng2-pagination';
// 导路由模块
import {HotListRoutingModule} from './hot-list-routing.module';
import { HotMenuComponent } from './hot-menu/hot-menu.component';
import { HotMenuGatherComponent } from './hot-menu-gather/hot-menu-gather.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { NewMenuGatherComponent } from './new-menu-gather/new-menu-gather.component';
import { HotListMenuComponent } from './hot-list-menu/hot-list-menu.component';
import { OrderbycollectPipe } from './pipes/orderbycollect.pipe';
import { OrderbytimePipe } from './pipes/orderbytime.pipe';
import { MenuFashionComponent } from './menu-fashion/menu-fashion.component';

@NgModule({
  declarations: [
    HotListComponent,
    HotMenuComponent,
    HotMenuGatherComponent,
    NewMenuComponent,
    NewMenuGatherComponent,
    HotListMenuComponent,
    OrderbycollectPipe,
    OrderbytimePipe,
    MenuFashionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HotListRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [HotListComponent ]
})
export class HotListModule { }
