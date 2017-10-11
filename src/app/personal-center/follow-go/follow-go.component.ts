import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../../services/global-property.service';

@Component({
  selector: 'app-follow-go',
  templateUrl: './follow-go.component.html',
  styleUrls: ['./follow-go.component.css'],
  providers: [ UserServiceService]
})
export class FollowGoComponent implements OnInit {

  FollowGo: any;
  flag = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private glo: GlobalPropertyService,
    private userSer: UserServiceService
  ) {
  }

  ngOnInit() {
    const that = this;
    const val = that.glo._val;
    // console.log(val);
    that.userSer.getFollowGo(val, function (reslut) {
      // console.log(reslut);
      if (reslut.length) {
        that.FollowGo = reslut;
      } else{
        that.flag = true;
      }
     // console.log(that.flag);
    });
  }
}
