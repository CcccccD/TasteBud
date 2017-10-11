import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchComponent} from "./search.component";
import { RecipeComponent } from './recipe/recipe.component';
import { UserComponent } from './user/user.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

/*导入路由模块*/
import { SearchRoutingModule } from './search-routing.module';
import { SearchRecipePipe } from './pipes/search-recipe.pipe';
import { OrderbyCollectPipePipe } from './pipes/orderby-collect-pipe.pipe';
import { OrderbyTimePipePipe } from './pipes/orderby-time-pipe.pipe';
import { SearchUserPipePipe } from './pipes/search-user-pipe.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    RecipeComponent,
    UserComponent,
    RightSidebarComponent,
    SearchRecipePipe,
    OrderbyCollectPipePipe,
    OrderbyTimePipePipe,
    SearchUserPipePipe
  ],
  imports: [
    BrowserModule,
    SearchRoutingModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
