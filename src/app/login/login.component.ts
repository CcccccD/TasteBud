import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';


import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServiceService ]
})
export class LoginComponent implements OnInit {
  login_res: string;
  _telephone:any;
  _password:any;
  // user_icon:any;
  constructor(
    private userSer: UserServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
    private localstorage: LocalStorage
  ) { }

   //  _telephone='13812790421';
  // _password='1234567';

  ngOnInit() {
    if(this.localstorage.get('phone')){
      this._telephone=this.localstorage.get('phone');
      this._password=this.localstorage.get('password');
    }
    this.glo.hiddenNavs = true;
    if (sessionStorage.getItem('ID')) {
      this.router.navigate(['/index']);
    }
  }
  // 单例  单一的实例

  toLogin(login_form){
    const that = this;
   // console.log($('#checkbox1').is(':checked'));
    if($('#checkbox1').is(':checked')){
      that.localstorage.set('phone',that._telephone);
      that.localstorage.set('password',that._password);
    }else{
      that.localstorage.remove('phone');
      that.localstorage.remove('password');
    }
    that.userSer.login(login_form.form.value, function (result) {
      if (result.stageCode == 1) {
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('ID', result.Id);
        if(result.UserIcon){
          sessionStorage.setItem('UserIcon', result.UserIcon);
          that.glo.user_icon = result.UserIcon;
        }else{
          sessionStorage.setItem('UserIcon', that.glo.user_icon);
        }
      //  console.log(result.UserIcon);
        that.localstorage.set('token', result.token);
        that.router.navigate(['/index']);
      }else {
      //  console.log(result.stageCode);
        that.login_res = '用户名或密码错误';
      }
    });
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
}
