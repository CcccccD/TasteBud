import {Component, OnInit} from '@angular/core';
import {MenuServiceService} from './../services/menu-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-gather',
  templateUrl: './menu-gather.component.html',
  styleUrls: ['./menu-gather.component.css'],
  providers: [ MenuServiceService ]
})
export class MenuGatherComponent implements OnInit {
  _delFlag:any=false;
  IndexFashion: any;
  details: any;
  _recipe:any;
  _name:any;
  _descripe:any;
  _collect_times:any;
  _creater_time:any;
  _creater:any;
  _creater_id:any;
  _usericon:any;

  flagcollect: boolean;
  flagcollect1: boolean;
  constructor(
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    // console.log(val);
    that.MenuD.getMenuDetails(val,function (result) {
      // console.log(result);
      if(result.length){
        that._name = result[0].name;
        that._collect_times = result[0].collect_times;
        that._descripe = result[0].descripe;
        that._creater = result[0].creater;
        that.details = result.length;
        that._creater_time = result[0].creater_time.substring(0,10);
        that._creater_id = result[0].creater_id;
        that._usericon=result[0].user_icon;
        that._recipe=result;
      }else {
        that.router.navigate(['/page-not-found']);
      }
      if (userid == that._creater_id) {
        that._delFlag = true;
      }
    });
    that.MenuD.getIndexFashion(function(result){
      if (result) {
        that. IndexFashion = result;
      }else {
        that.router.navigate(['/login']);
      }
    });


    const userid = sessionStorage.getItem('ID');//用户id
    that.MenuD.checkmenucollect(val, userid, function (result) {
      if (result.stageCode == 1) {
        that.flagcollect = false;
      }
      else {
        that.flagcollect = true;
      }
      that.flagcollect1=that.flagcollect;
    });
  }

  collect() {
    if(sessionStorage.getItem('ID')){
      const that = this;
      that.flagcollect1 = !that.flagcollect1;
    }else{
      if(confirm("你还没有登录，是否去登录？")){
        this.router.navigate(['/login']);
      }
    }
  }

  deleteRecipe(recipe_id){
    const userid = sessionStorage.getItem('ID');//用户id
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    if(confirm("是否删除该菜谱")){
      that.MenuD.delRfromL(recipe_id , val , function(result){
        that.MenuD.getMenuDetails(val, function (result) {
          // console.log(result);
          if(result.length){
            that._name = result[0].name;
            that._collect_times = result[0].collect_times;
            that._descripe = result[0].descripe;
            that._creater = result[0].creater;
            that.details = result.length;
            that._creater_time = result[0].creater_time.substring(0,10);
            that._creater_id = result[0].creater_id;
            that._usericon=result[0].user_icon;
            that._recipe=result;
          }else {
            that.router.navigate(['/page-not-found']);
          }
          if (userid == that._creater_id) {
            that._delFlag = true;
          }
        });
      });
      // console.log(val);
    }
  }

  ngOnDestroy( ) {
    const that = this;
    const menuid = that.route.snapshot.paramMap.get('val');//菜单id
    const userid = sessionStorage.getItem('ID');
    if(that.flagcollect != that.flagcollect1){
      if(that.flagcollect1){
        that.MenuD.uncollectMenu(menuid, userid, function (result) {});
      }else{
        that.MenuD.collectMenu(menuid, userid, function (result) {});
      }
    }
  }
}
