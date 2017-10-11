import { Component, OnInit,Input } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css'],
  providers: [UserServiceService ]
})
export class MyMenuComponent implements OnInit {
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
    //console.log(val);
    that.userSer.getMenu(val,function (reslut) {
      // console.log(reslut);
      if(reslut.length) {
        that.PersonalMenu = reslut;
      }else{
        that.flag = true;
      }
     // console.log(that.flag);
    });
  }
}
