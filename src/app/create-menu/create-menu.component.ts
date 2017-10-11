import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {MenuServiceService} from '../services/menu-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css'],
  providers: [UserServiceService , MenuServiceService]
})
export class CreateMenuComponent implements OnInit {
  StepStr:any = '';
  MaterialStr:any = '';
  material_amountStr:any = '';
  _id: any;
  _name: any;
  _user_icon:any;
  Formdata:any;
  constructor(
    private userSer: UserServiceService,
    private menuD: MenuServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
    private localstorage: LocalStorage
  ) {
  }
  ngOnInit() {
    const that = this;
    that._id = sessionStorage.getItem('ID');
   /* if(!that._id){
      alert("你还没有登录，请先登录！");
      that.router.navigate(['/login']);
    }*/
    let token = that.localstorage.get('token');
    if(sessionStorage.getItem('ID')){
      that.userSer.getBasicInfo(that._id, token ,function(result){
        console.log(result);
        if(result.length){
          that._name = result[0].name;
          that._user_icon = result[0].user_icon;
        }else{
          sessionStorage.removeItem('ID');
          this.router.navigate(['/login']);
        }
      });
    }else{
      alert("你还没有登录，请先登录");
      this.router.navigate(['/login']);
    }
}
  change(e){
    var file=e.target.files[0];
    this.preview(file);
  }
  preview(file){
    var img=new Image();
    img.src=URL.createObjectURL(file);
    var url=img.src;
    var $img=$(img);
    img.onload=function(){
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('.recipe_cover').empty().append($img);
    }
  }
  add(){
    const my_tr = $('#my_tr').clone(false);
    my_tr.find("img").bind('click',function ($event) {
      $event.target.parentElement.parentElement.remove();
    });
    my_tr.find("input").each(function(i){
      $(this).val("");
    });
    $('#mytable').append(my_tr);
  }
  del(e){
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
  addstep(){
   const my_li = $('#my_li').clone();
    my_li.find("img").bind('click',function ($event) {
      $event.target.parentElement.parentElement.remove();
    });
    my_li.find("textarea").each(function(i){
      $(this).val("");
    });
    $('#step').append(my_li);
  }

  UploadMenu(e){
    const that = this;
    $('.recipe_step').each(function (n) {
      that.StepStr += $(this).val() + 'weilei.com';
    });
    $('.material').each(function (n) {
      that.MaterialStr += $(this).val() + 'weilei.com';
    });
    $('.material_amount').each(function (n) {
      that.material_amountStr += $(this).val() + 'weilei.com';
    });

    // console.log(that.StepStr);
    // console.log(that.MaterialStr);
    // console.log(that.material_amountStr);
    setTimeout(function () {that.Formdata = new FormData(e.target.parentElement.parentElement);
      that.menuD.uploadMenu(that.Formdata,function (result) {
       // console.log(result);
        that.StepStr = '';
        that.MaterialStr = '';
        that.material_amountStr = '';
         // location.reload();
         that.router.navigate(['/menu-details/' + result.recipe_id]);
      });}, 1000);
  }



}
