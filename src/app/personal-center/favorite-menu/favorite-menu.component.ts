import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-menu',
  templateUrl: './favorite-menu.component.html',
  styleUrls: ['./favorite-menu.component.css']
})
export class FavoriteMenuComponent implements OnInit {
  flag= false;
  PersonalMenu:any
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.glo._val;
   // console.log(val);
    that.userSer.getCollectRecipes(val,function (reslut) {
     // console.log(reslut);
      if(reslut.length){
        that.PersonalMenu=reslut;
      }else{
        that.flag=true;
      }
      // console.log(that.flag);
    });
  }
}
