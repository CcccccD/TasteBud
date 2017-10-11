import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import {PersonalCenterComponent } from './personal-center.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyProductComponent } from './my-product/my-product.component';
import { MyMenuGatherComponent } from './my-menu-gather/my-menu-gather.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteMenuComponent } from './favorite-menu/favorite-menu.component';
import { FollowGoComponent } from './follow-go/follow-go.component';
import { FollowBeComponent } from './follow-be/follow-be.component';

/*导入路由模块*/
import {PersonalCenterRoutingModule} from './personal-center-routing.module';

@NgModule({
  declarations: [
    MyMenuComponent,
    MyProductComponent,
    MyMenuGatherComponent,
    MessageBoardComponent,
    FavoriteComponent,
    PersonalCenterComponent,
    FavoriteMenuComponent,
    FollowGoComponent,
    FollowBeComponent
  ],
  imports: [
    BrowserModule,
    PersonalCenterRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
