import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './../../services/global-property.service';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [MenuServiceService]
})
export class RecipeComponent implements OnInit {
  tabs=['默认','热门','最新'];
  tab_index=0;
  searchMenus:any;
  searchText:string;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
  ) { }
  ngOnInit() {
    this.searchText=this.glo._searchText;
    const that = this;
    that.MenuD.searchMenus(function(result){
      that.searchMenus = result;
    });

  }

  ngAfterContentChecked() {
    this.searchText=this.glo._searchText;

  }

}
