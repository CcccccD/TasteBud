import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../services/user-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-account-set',
  templateUrl: './account-set.component.html',
  styleUrls: ['./account-set.component.css'],
  providers: [UserServiceService]
})
export class AccountSetComponent implements OnInit {
/*
  froalaContent(event){
    console.log(event);
  }
*/

  // data:any;
 _name: any;
 _signature: any;
  Formdata: any;
  data= [
    {
      provence: '北京',
      city: ['朝阳区', '丰台区', '海淀区', '通州区'],
      id: ['346', '347', '348']
    },
    {
      provence: '天津',
      city: ['和平区', '北辰区', '河北区', '河西区 '],
      id: ['361', '362', '363', '364']
    },
    {
      provence: '河北省',
      city: ['邯郸市', '邢台市', '保定市', '张家口市'],
      id: ['8', '9', '10', '11']
    },
    {
      provence: '山西省',
      city: ['太原市', '大同市', '阳泉市', '长治市 '],
      id: ['16', '17', '18', '19']
    },
    {
      provence: '内蒙古自治区',
      city: ['呼和浩特市', '包头市', '乌海市', '赤峰市 '],
      id: ['27', '28', '29', '30']
    },
    {
      provence: '辽宁省',
      city: ['大连市', '鞍山市', '抚顺市', '本溪市 '],
      id: ['40', '41', '42', '43']
    },
    {
      provence: '吉林省',
      city: ['长春市', '吉林市', '四平市', '辽源市 '],
      id: ['53', '54', '55', '56']
    },
    {
      provence: '浙江省',
      city: ['台州市', '丽水市'],
      id: ['99', '100']
    },
    {
      provence: '安徽省',
      city: ['合肥市', '芜湖市', '淮南市', '铜陵市'],
      id: ['101', '102', '104', '105']
    },
    {
      provence: '福建省',
      city: ['福州市'],
      id: ['118']
    },
    {
      provence: '湖北省',
      city: ['孝感市', '荆州市', '黄冈市', '咸宁市'],
      id: ['179', '180', '181', '182']
    },
    {
      provence: '湖南省',
      city: ['长沙市', '株洲市', '湘潭市', '衡阳市'],
      id: ['186', '187', '188', '189']
    },
    {
      provence: '四川省',
      city: ['眉山市', '宜宾市', '广安市', '达州市'],
      id: ['252', '253', '254', '255']
    }
  ];
  citys: any;
  cityss: any;
  ids: any;
  idss: any;
  _id: any;
  warn: string;
  updatestate: boolean;
  constructor(
    private userSer: UserServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
    private localstorage: LocalStorage
  ) {
  }
/*  selectPro(event:any){
    console.log(event.target.selectedIndex);
    if (event.target.selectedIndex>0){
      this.citys=this.data[event.target.selectedIndex-1].city;
    }
  }*/

  ngOnInit() {
    const that = this;
    if (!sessionStorage.getItem('ID')) {
      that.router.navigate(['/login']);
    }
  that._id = sessionStorage.getItem('ID');
  const token = that.localstorage.get('token');
  that.userSer.getBasicInfo(that._id, token , function(result){
    // console.log(result);
      if (result.length){
        that._name = result[0].name;
        that._signature = result[0].signature;
      }else{
        sessionStorage.removeItem('ID');
        this.router.navigate(['/login']);
      }
  });
  }
  selectProJ(event: any){
    this.citys = this.data[event.target.value].city;
    this.ids = this.data[event.target.value].id;
    // console.log(this.citys);
    // console.log(this.ids);
  }
  selectProX(event: any){
    this.cityss = this.data[event.target.value].city;
    this.idss = this.data[event.target.value].id;
    // console.log(this.cityss);
    // console.log(this.idss);
  }

  //图片预览
  change(e) {
    const file = e.target.files[0];
    // console.log(file);
    const path = file.type;
    const Path = path.substr(path.lastIndexOf('/')).toUpperCase();
    // console.log(Path);
    if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
      this.preview(file);
      this.warn = '';
    } else{
      this.warn = '你上传的不是图片~';
      // alert('你上传的不是图片');
    }
  }
  preview(file){
    const img = new Image();
    img.src = URL.createObjectURL(file);
    const url = img.src;
    const $img = $(img);
    img.onload = function(){
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('.preview').empty().append($img);
    };
  }

  UpdateInfo(e){
    const that = this;

    that.Formdata = new FormData(e.target.parentElement);
    that.userSer.updateInfo(that.Formdata, function (result) {
      console.log(result);
      if (result.stageCode == '1') {
        // alert('更新成功');
        that.updatestate = true;
        sessionStorage.setItem('UserIcon' , result.user_icon.trim());
        const _id = sessionStorage.getItem('ID');
        that.router.navigate(['/personal-center/' + _id + '/my-menu' ]);
      }else {
        // alert('更新失败');
        that.updatestate= false;
      }
    });
  }
}
