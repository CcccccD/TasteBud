import { Component, OnInit, Input} from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserServiceService]
})
  export class RegisterComponent implements OnInit {
  flag: any= false;
  iTime= 59;
  code_mes: any= '获取验证码' ;
  code_val: any;
  code_res: any;
  reg_res: any;
  num: any;
  constructor(
    private userSer: UserServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
    private localstorage: LocalStorage
  ) {}

  ngOnInit() {
    this.glo.hiddenNavs = true;
    if ( sessionStorage.getItem('token')) {
      this.router.navigate(['/index']);
    }
  }

  getCode(phone_form){
    const that = this;
    console.log(phone_form.form.value);
    that.userSer.getCodeByphone(phone_form.form.value, function (result) {
       if (result.stageCode == '1') {
         that.code_res = ' 该手机号已经注册过 ';
         console.log(that.code_res);
       }else if (result.stageCode == 'e004'){
         that.code_res = '数据库错误！';
         console.log(that.code_res);
       }else{
         if (result){
           console.log(result);
           that.num = result.stageCode;
           that.code_res = '';
           console.log(that.num);
           that.RemainTime();
         }
       }
     });
  }

  toRegister(register_form){
    if (this.num != this.code_val) {
      this.reg_res = '验证码错误!!!';
    } else {
      const that = this;
      that.userSer.register(register_form.form.value, function (result) {
        if (result.stageCode == '2') {
          that.reg_res = '用户名已存在！';
        } else if (result.stageCode == '1') {
          sessionStorage.setItem('ID', result.Id);
          sessionStorage.setItem('UserIcon', that.glo.user_icon);
          sessionStorage.setItem('token', result.token);
          that.localstorage.set('token', result.token);
          that.router.navigate(['/index']);
          that.reg_res = '';
        } else {
          that.reg_res = '数据库错误！';
        }
      });
    }
  }

  private timer;

  RemainTime(){
    this.flag = true;
    this.timer = setInterval(() => {
      this.code_mes = this.iTime + '秒后重新获取';
      this.iTime--;
      if (this.iTime < 0){
        this.flag = false;
        clearInterval(this.timer);
      }
    }, 1000);
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
    clearInterval(this.timer);

  }

}
