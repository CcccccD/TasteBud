import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [UserServiceService ]
})
export class PersonalCenterComponent implements OnInit {
  // PersonalVal:any;
  _lengthBe: any = 0;
  _length: any=0;
  flag= true;
  Info: any;
  _name: any;
  _cometime: any;
  _signature: any;
  _sex: any;
  _profession: any;
  _production_number: any;
  _collection_number: any;
  _usericon: any;
  _homeS: any;
  _homeC: any;
  _nowS: any;
  _nowC: any;

  flagfollow: boolean;
  flagfollow1: boolean;
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const that = this;

    const val = that.route.snapshot.paramMap.get('val');
    that.userSer.getFollowBe(val, function (result){
      if (result.length){
        that._lengthBe = result.length;
      }
    });

    that.userSer.getFollowGo(val, function (result) {
      if (result.length){
        that._length = result.length;
      }
    });
    if (val != sessionStorage.getItem('ID')){
      that.flag = false;
    }
    that.userSer.getInfo(val, function(result){
      if (result.length){
        that.Info = result;
        that._name = result[0].name;
        that._cometime = result[0].cometime.toLocaleString().substring(0, 10);
        that._signature = result[0].signature;
        that._sex = result[0].sex;
        that._profession = result[0].profession;
        that._production_number = result[0].production_number;
        that._collection_number = result[0].collection_number;
        that._usericon = result[0].user_icon;
        that._homeS = result[0].homeS;
        that._homeC = result[0].homeC;
        that._nowS = result[0].nowS;
        that._nowC = result[0].nowC;
      }else{
        that.router.navigate(['/index']);
      }
      if (!that._usericon){
        that._usericon = 'http://owigmgx25.bkt.clouddn.com/head_pic02.jpg';
      }
    });
    that.glo._val = val;

    // 关注
    const followerid = that.route.snapshot.paramMap.get('val');
    const userid = sessionStorage.getItem('ID');
    that.userSer.checkFollow(followerid, userid, function (result) {
      if (result.stageCode == 1) {
        that.flagfollow = false;
      }
      else {
        that.flagfollow = true;
      }
      that.flagfollow1=that.flagfollow;
    });
  }

  collect() {
    const that = this;
    if( sessionStorage.getItem('ID')){
      that.flagfollow1 = !that.flagfollow1;
    }else{
      if(confirm("你还没有登录，是否去登录？")){
        that.router.navigate(['/login']);
      }
    }
  }

  ngOnDestroy() {
    const that = this;
    const followerid = that.route.snapshot.paramMap.get('val');
    const userid = sessionStorage.getItem('ID');
    if(that.flagfollow !=that.flagfollow1){
      if(that.flagfollow1){
        that.userSer.unfollowUser(followerid, userid, function (result) {});
      }else{
        that.userSer.followUser(followerid, userid, function (result) {});
      }
    }
  }
}
