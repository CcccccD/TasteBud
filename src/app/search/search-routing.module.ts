/**
 * Created by 李 on 2017/9/11.
 */
import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入系统路由

import {SearchComponent } from './search.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

//配置路由表(父)
const routes: Routes = [
  {
    path:'search',
    component:SearchComponent,
    children:[
      {
        path:'recipe',
        component:RecipeComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path: '',
        redirectTo: '/search/recipe',
        pathMatch:'prefix'
      }

    ]
  }
];

@NgModule({
  imports:
    [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SearchRoutingModule {}
