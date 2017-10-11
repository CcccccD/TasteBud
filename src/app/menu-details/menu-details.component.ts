import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import {UserServiceService} from './../services/user-service.service';

import {GlobalPropertyService} from './../services/global-property.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css'],
  providers: [MenuServiceService, GlobalPropertyService, UserServiceService]
})
export class MenuDetailsComponent implements OnInit {

  MenuLists: any;

  details: any;
  steps: any;
  _name: any;
  _cover_pic: any;
  _descripe: any;
  _cook_times: any;
  _collect_times: any;
  _create_time: any;
  _tips: any;
  _creater: any;
  _creater_id: any;
  flag: boolean;
  flagcollect: boolean;
  flagcollect1: boolean;
  PersonalLists: any;
  flagadd = false;
  flagaddmenu = false;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private userSer: UserServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    // console.log(val+"1111111");
    that.MenuD.getMenuLists( val,function (result){
      //  console.log(result)
      if (result.length){
        that.MenuLists = result;
        //   console.log(that.MenuLists);
      }else {
      }
    });
    that.MenuD.getDetails(val, function (result) {
      // console.log(result);
      if (result.length) {
        that.details = result;
        that._name = result[0].name;
        that._cover_pic = result[0].cover_pic;
        that._descripe = result[0].descripe;
        that._cook_times = result[0].cook_times;
        that._collect_times = result[0].collect_times;
        that._create_time = result[0].create_time;
        that._tips = result[0].tips;
        that._creater = result[0].creater;
        that._creater_id = result[0].creater_id;
        if (that._tips) that.flag = true;
        else that.flag = false;
      } else {
        that.router.navigate(['/index']);
      }
    });
    that.MenuD.getSteps(val, function (result) {
      if (result.length) {
        that.steps = result;
      } else {
        that.router.navigate(['/index']);
      }
    });

    const reciperid = that.route.snapshot.paramMap.get('val'); //菜谱id
    const userid = sessionStorage.getItem('ID'); //用户id
    that.MenuD.checkcollect(reciperid, userid, function (result) {
      if (result.stageCode == 1) {
        that.flagcollect = false;
      }
      else {
        that.flagcollect = true;
      }
      that.flagcollect1 = that.flagcollect;
    });
  }collect() {
  if(sessionStorage.getItem('ID')){
    const that = this;
    that.flagcollect1 = !that.flagcollect1;
  }else{
    if(confirm("你还没有登录，是否去登录？")){
      this.router.navigate(['/login']);
    }
  }
}
  add() {
    if (sessionStorage.getItem('ID')) {
      const  that = this;
      that.flagadd = true;
      // const val = that.glo._val;
      const val = sessionStorage.getItem('ID');
      that.userSer.getMenuGather(val, function (result) {
        // console.log(result);
        if (result.length) {
          that.PersonalLists = result;
        }else {
          that.flagaddmenu = true;
        }
      });
    }else {
      if (confirm('你还没有登陆，是否去登陆？')) {
        this.router.navigate(['/login']);
      }
    }
  }
  closeadd() {
    const that = this;
    that.flagadd = false;
    // console.log(that.flagaddmenu);
  }
  addmenuconfirm() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    // const userid = sessionStorage.getItem('ID');
    // console.log($('#select').find('option:selected').val());
    const recipeid = $('#select').find('option:selected').val();
    that.MenuD.addMenu(val, recipeid , function (result) {
      // console.log(result);
      if (result.stageCode == '1') {
        alert('加入菜单成功');
        that.flagadd = false;
        that.MenuD.getMenuLists( val,function (result){
          //  console.log(result)
          if (result.length){
            that.MenuLists = result;
            //   console.log(that.MenuLists);
          }else {
          }
        });
      }else {
        alert('加入菜单失败');
      }
    });
  }

  ngOnDestroy() {
    const that = this;
    const reciperid = that.route.snapshot.paramMap.get('val'); //菜谱id
    const userid = sessionStorage.getItem('ID');
    if (that.flagcollect != that.flagcollect1){
      if (that.flagcollect1){
        that.MenuD.uncollectRecipe(reciperid, userid, function (result) {});
      }else{
        that.MenuD.collectRecipe(reciperid, userid, function (result) {});
      }
    }
    // console.log(that._name);
    sessionStorage.setItem('recipe_name',that._name);
  }
}
