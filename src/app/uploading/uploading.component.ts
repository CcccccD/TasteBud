import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './../services/global-property.service';
import {MenuServiceService} from '../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.css'],
  providers: [MenuServiceService  , GlobalPropertyService]
})
export class UploadingComponent implements OnInit {
  recipe_name:any;
  recipe_id:any;
  creater_id:any;
  Formdata:any;
  warn:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private glo: GlobalPropertyService,
    private menuD: MenuServiceService
  ) { }

  ngOnInit() {
    this.recipe_name = sessionStorage.getItem('recipe_name');
    console.log(this.glo._recipeName);
    this.recipe_id = this.route.snapshot.paramMap.get('val');
    this.creater_id = sessionStorage.getItem('ID');
  }
  change(e) {
    const file = e.target.files[0];
    const path = file.type;
    const Path = path.substr(path.lastIndexOf('/')).toUpperCase();
    if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
      this.preview(file);
      this.warn = '';
    } else {
      this.warn = '你上传的不是图片~';
    }
  }
  preview(file) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    const url = img.src;
    const $img = $(img);
    img.onload = function () {
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('.preview').empty().append($img);
    };
  }

  uploadWork(e){
    const that = this;
    that.Formdata = new FormData(e.target.parentElement.parentElement);
    that.menuD.addPersonalWorks(that.Formdata, function (result) {
      console.log(result);
      that.router.navigate(['/personal-center/' + that.creater_id + '/my-menu' ]);
    });
  }

}
