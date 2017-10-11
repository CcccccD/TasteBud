import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css'],
  providers: [UserServiceService ]
})
export class MyProductComponent implements OnInit {
  _delFlag:any = false;
 thumb_flag: any= [];
  thumb_flag2: any= [];
 flag= false;
 PersonalProduct: any= [];
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    const that = this;
    const val = that.glo._val;
    const userid = sessionStorage.getItem('ID');
    if(userid == val ){
      that._delFlag = true;
    }
    // console.log(val);
    that.userSer.getPersonalWoks(val, function (result) {
     // console.log(result);
      if (result.length){
        for (let i = 0; i < result.length; i++){
          that.userSer.checkThumb(result[i].id, userid, function (data) {
            if (data.stageCode == 1) {
              that.thumb_flag[i] = false;
            }
            else {
              that.thumb_flag[i] = true;
            }
          });
        }
        that.PersonalProduct = result;
      }else {
        that.flag = true;
      }
     // console.log(that.flag);
    });
    that.thumb_flag2 = that.thumb_flag;
    // console.log(that.thumb_flag2);
  }


  exchange(i: any) {
    const userid = sessionStorage.getItem('ID');
    if(userid){
      this.thumb_flag2[i] = !this.thumb_flag2[i];
      if (this.thumb_flag2[i]) {
        this.userSer.unthumbWork(this.PersonalProduct[i].id, userid, function (result) {});
        this.PersonalProduct[i].thumb_numbers=this.PersonalProduct[i].thumb_numbers-1;
      }else{
        this.userSer.thumbWork(this.PersonalProduct[i].id, userid, function (result) {});
        this.PersonalProduct[i].thumb_numbers=this.PersonalProduct[i].thumb_numbers+1;
      }
    }else{
      if(confirm("你还没有登录，是否去登录？")){
        this.router.navigate(['/login']);
      }
    }
  }

  deleteWork(work_id){
    const that = this;
    const val = that.glo._val;
    const userid = sessionStorage.getItem('ID');
    if(confirm("是否删除该菜谱")){
      that.userSer.delWork(work_id ,function(result){
        console.log(result);
        if(result.stageCode == '1'){
          that.userSer.getPersonalWoks(val, function (result) {
            // console.log(result);
            if (result.length){
              for (let i = 0; i < result.length; i++){
                that.userSer.checkThumb(result[i].id, userid, function (data) {
                  if (data.stageCode == 1) {
                    that.thumb_flag[i] = false;
                  }
                  else {
                    that.thumb_flag[i] = true;
                  }
                });
              }
              that.PersonalProduct = result;
            }else {
              that.flag = true;
            }
            // console.log(that.flag);
          });
          that.thumb_flag2 = that.thumb_flag;
        }else{
          alert("删除失败！");
        }
        // location.reload();
      });
    }
  }

}
