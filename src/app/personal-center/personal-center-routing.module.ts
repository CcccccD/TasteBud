/**
 * Created by 李 on 2017/9/11.
 */
import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 导入系统路由

import {PersonalCenterComponent } from './personal-center.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyProductComponent } from './my-product/my-product.component';
import { MyMenuGatherComponent } from './my-menu-gather/my-menu-gather.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteMenuComponent } from './favorite-menu/favorite-menu.component';
import { FollowGoComponent } from './follow-go/follow-go.component';
import { FollowBeComponent } from './follow-be/follow-be.component';

// 配置路由表(父)
const routes: Routes = [
  {
    path: 'personal-center/:val',
    component: PersonalCenterComponent,
    children: [

      {
        path: 'favorite',
        component: FavoriteComponent
      },
      {
        path: 'follow-go',
        component: FollowGoComponent
      },
      {
        path: 'follow-be',
        component: FollowBeComponent
      },
      {
        path: 'favorite-menu',
        component: FavoriteMenuComponent
      },
      {
        path: 'my-menu',
        component: MyMenuComponent
      },
      {
        path: 'my-menu-gather',
        component: MyMenuGatherComponent
      },
      {
        path: 'my-product',
        component: MyProductComponent
      },
      {
        path: 'message-board',
        component: MessageBoardComponent
      },
      {
        path: '',
        component: MyMenuComponent
/*        redirectTo: './my-menu/',
        pathMatch: 'prefix'*/
      }

    ]
  },
  {
    path: 'personal-centerOther/:val',
    component: PersonalCenterComponent,
    children: [

      {
        path: 'favorite',
        component: FavoriteComponent
      },
      {
        path: 'follow-go',
        component: FollowGoComponent
      },
      {
        path: 'follow-be',
        component: FollowBeComponent
      },
      {
        path: 'favorite-menu',
        component: FavoriteMenuComponent
      },
      {
        path: 'my-menu',
        component: MyMenuComponent
      },
      {
        path: 'my-menu-gather',
        component: MyMenuGatherComponent
      },
      {
        path: 'my-product',
        component: MyProductComponent
      },
      {
        path: 'message-board',
        component: MessageBoardComponent
      },
      {
        path: '',
        component: MyMenuComponent
        /*        redirectTo: './my-menu/',
                pathMatch: 'prefix'*/
      }

    ]
  },
  {
    path: 'personal-centerOther2/:val',
    component: PersonalCenterComponent,
    children: [

      {
        path: 'favorite',
        component: FavoriteComponent
      },
      {
        path: 'follow-go',
        component: FollowGoComponent
      },
      {
        path: 'follow-be',
        component: FollowBeComponent
      },
      {
        path: 'favorite-menu',
        component: FavoriteMenuComponent
      },
      {
        path: 'my-menu',
        component: MyMenuComponent
      },
      {
        path: 'my-menu-gather',
        component: MyMenuGatherComponent
      },
      {
        path: 'my-product',
        component: MyProductComponent
      },
      {
        path: 'message-board',
        component: MessageBoardComponent
      },
      {
        path: '',
        component: MyMenuComponent
        /*        redirectTo: './my-menu/',
                pathMatch: 'prefix'*/
      }

    ]
  }
];

@NgModule({
  imports:
    [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PersonalCenterRoutingModule {}
