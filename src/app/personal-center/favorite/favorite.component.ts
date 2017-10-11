import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  providers: [UserServiceService ]
})
export class FavoriteComponent implements OnInit {

  favorite:any;
  flag=false;
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
    that.userSer.getFavorite(val,function (reslut) {
      // console.log(reslut);
      if(reslut.length){
        that.favorite=reslut;
      }else{
        that.flag=true;
      }
      // console.log(that.flag);
    });
  }
}
