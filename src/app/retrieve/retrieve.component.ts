import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css'],
  providers: [UserServiceService]
})
export class RetrieveComponent implements OnInit {
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
  getCode(phone_form) {
    const that = this;
   // console.log(phone_form.form.value);
    that.userSer.getReCodeByphone(phone_form.form.value, function (result) {
      if (result.stageCode == '1') {
        that.code_res = ' 该手机号还没有注册过 ';
      //  console.log(that.code_res);
      }else if (result.stageCode == 'e004'){
        that.code_res = '数据库错误！';
       // console.log(that.code_res);
      }else{
        if (result) {
       //   console.log(result);
          that.num = result.stageCode;
          that.code_res = '';
         // console.log(that.num);
          that.RemainTime();
        }
      }
    });
  }

  toRetrieve(retrieve_form){
    if (this.num != this.code_val) {
      this.reg_res = '验证码错误!!!';
    } else {
      const that = this;
      that.userSer.retrieve(retrieve_form.form.value, function (result) {
        /*if (result.stageCode == '2') {
          that.reg_res = '用户名已存在！';
        } else if (result.stageCode == '1') {
          sessionStorage.setItem('ID', result.Id);
          sessionStorage.setItem('token', result.token);
          that.localstorage.set('token', result.token);
          that.router.navigate(['/index']);
          that.reg_res = '';*/
        if (result.stageCode == 1) {
          //修改成功
       //   console.log(result);
          that.router.navigate(['/login']);
      } else {
          that.reg_res = '修改失败！';
        }
      });
    }
  }

  private timer;
  RemainTime() {
    this.flag = true;
    this.timer = setInterval(() => {
      this.code_mes = this.iTime + '秒后重新获取';
      this.iTime--;
      if (this.iTime < 0) {
        this.flag = false;
        clearInterval(this.timer);
      }
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
