import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service';


@Component({
  selector: 'app-menu-classify',
  templateUrl: './menu-classify.component.html',
  styleUrls: ['./menu-classify.component.css'],
  providers: [MenuServiceService, GlobalPropertyService]
})
export class MenuClassifyComponent implements OnInit {

  hot= [];
  sweet= [];
  meat= [];
  shoup= [];
  vagetable= [];
  i= 0;
  _stext: string;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router,
    private glo: GlobalPropertyService
  ) { }

  ngOnInit() {
    const that = this;
    that.MenuD.getclssify(function (result) {
      if(result){
        for (that.i = 0; that.i < result.length; that.i++){
          if (result[that.i].class_id == 1){
            that.hot.push(result[that.i]);
            // console.log(that.hot);
          }
          else if (result[that.i].class_id == 2){
            that.sweet.push(result[that.i]);
          }
          else if (result[that.i].class_id == 3){
            that.meat.push(result[that.i]);

          }else if (result[that.i].class_id == 4){
            that.shoup.push(result[that.i]);
          }
          else{
            that.vagetable.push(result[that.i]);
          }
        }
      }
    });

  }
  jumpsearch(text){
   // console.log(text);
    // this.glo._searchText = this._stext;
    sessionStorage.setItem('text', text);
    // this.glo._searchText = text;
    this.router.navigate(['/search/recipe']);
    // console.log(this.glo._searchText);
  }
  /*ngOnDestroy(){
    this.glo._searchText=this._stext;
  }*/
}
