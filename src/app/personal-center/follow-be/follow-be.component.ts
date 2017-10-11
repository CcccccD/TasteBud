import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-follow-be',
  templateUrl: './follow-be.component.html',
  styleUrls: ['./follow-be.component.css'],
  providers: [UserServiceService ]
})
export class FollowBeComponent implements OnInit {

  follow_be: any;
  flag= false;
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
    that.userSer.getFollowBe(val, function (result){
      // console.log(reslut);
      if (result.length){
        that.follow_be = result;
      }else{
        that.flag = true;
      }
    //  console.log(that.flag);
    });
  }

}
