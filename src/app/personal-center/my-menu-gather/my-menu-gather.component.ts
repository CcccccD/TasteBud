import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-menu-gather',
  templateUrl: './my-menu-gather.component.html',
  styleUrls: ['./my-menu-gather.component.css'],
  providers: [UserServiceService ]

})
export class MyMenuGatherComponent implements OnInit {

  PersonalLists:any;
  flag= false;
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const that=this;
    const val=that.glo._val;
   // console.log(val);
    that.userSer.getMenuGather(val,function (result) {
    //  console.log(result);
      if(result.length){
        that.PersonalLists = result;
      }else{
        that.flag = true;
      }
    //  console.log(that.flag);
    })
  }

}
