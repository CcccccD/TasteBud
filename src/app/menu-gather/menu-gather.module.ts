import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PersonalCenterComponent } from './personal-center/personal-center.component';

import { MenuGatherComponent } from './menu-gather.component';
// import { MenuContentComponent } from './menu-content/menu-content.component';
// import { MenuNodeComponent } from './menu-node/menu-node.component';
/*导入路由模块*/

@NgModule({
  declarations: [
    MenuGatherComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MenuGatherComponent]
})
export class MenuGatherModule { }
