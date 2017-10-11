import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {UserServiceService} from './../../services/user-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [MenuServiceService,UserServiceService]
})
export class TabsComponent implements OnInit {
  IndexMenus:any;
  IndexList:any;
  IndexUsers:any;
  tab_index= 0;
  tabs= ['菜谱推荐', '菜单推荐', '厨友推荐'];
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private userSer: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenus(function(result){
      /*console.log('1111');*/
      if (result) {
        that.IndexMenus = result;
      }else {
        that.router.navigate(['/login']);
      }
      // console.log(that.IndexMenus);
    });
    that.MenuD.getIndexList(function(result){
  // console.log(result);
      if (result) {
        that.IndexList = result;
      }else {
        that.router.navigate(['/login']);
      }
      // console.log(that.IndexMenus);
    });

    const userid = sessionStorage.getItem('ID');
    that.userSer.getUnfollowUsers(userid,function(result){
      if (result) {
        that.IndexUsers = result;
      }else {
        that.router.navigate(['/login']);
      }
     // console.log(that.IndexUsers);
    });
  }

}
