/**
 * Created by 李 on 2017/9/11.
 */
import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入系统路由

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MenuClassifyComponent } from './menu-classify/menu-classify.component';
import { MenuGatherComponent } from './menu-gather/menu-gather.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { HotListComponent } from './hot-list/hot-list.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountSetComponent } from './account-set/account-set.component';
import{RetrieveComponent} from　'./retrieve/retrieve.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import {UploadingComponent} from "./uploading/uploading.component";
import { CreateMenuGatherComponent } from './create-menu-gather/create-menu-gather.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

//配置路由表(父)
const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
/*  {
    path: 'hot-list',
    component: HotListComponent
  },*/
  {
    path: 'dynamic/:val',
    component: DynamicComponent
  },
  {
    path: 'menu-classify',
    component: MenuClassifyComponent
  },
  {
    path: 'menu-gather/:val',
    component: MenuGatherComponent
  },
  {
    path: 'menu-gatherOther/:val',
    component: MenuGatherComponent
  },
  {
    path: 'uploading/:val',
    component: UploadingComponent
  },
  {
    path: 'create-menu-gather',
    component: CreateMenuGatherComponent
  },
  {
    path: 'account-set',
    component: AccountSetComponent
  },
  {
    path: 'retrieve',
    component: RetrieveComponent
  },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'menu-details/:val',
    component: MenuDetailsComponent
  },
  // {
  //   path:'personal-center',
  //   component:PersonalCenterComponent
  // },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
