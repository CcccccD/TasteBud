import { Component } from '@angular/core';
import {GlobalPropertyService} from './services/global-property.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_icon: any;
  flag: any;
  Id: any;
  _hiddenNavs: boolean;
  constructor(
    private glo: GlobalPropertyService,
    private router: Router
  ) { }

  // ngOnInit () {
  //   this._hiddenNavs = this.glo.hiddenNavs;
  //   this.Id = sessionStorage.getItem('ID');
  // }
  _stext:string;
  exit(){
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
  search(s){
    this._stext=s;
    this.glo._searchText=this._stext;
    this.router.navigate(['/search']);
  }
  ngOnInit(): void {
    this._hiddenNavs = this.glo.hiddenNavs;
    this.Id = sessionStorage.getItem('ID');
    $(function () {
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(1500);
          }
          else {
            $(" #back-to-top ").fadeOut(1500);
          }
        });

        $(" #back-to-top ").click(function () {
          if ($('html').scrollTop()) {
            $('html').animate({scrollTop: 0}, 1000);
            return false;
          }
          $('body').animate({scrollTop: 0}, 1000);
          return false;
        });
      });
    });
  }

  ngAfterContentChecked () {
    this._hiddenNavs = this.glo.hiddenNavs;
    this.Id = sessionStorage.getItem('ID');
   // this.user_icon = this.glo.user_icon;
  }

  check(){
    if(!sessionStorage.getItem('ID')){
      alert("请先登录！");
      this.router.navigate(['/login']);
    }
  }
  ngDoCheck() {
    this._hiddenNavs = this.glo.hiddenNavs;
    if (sessionStorage.getItem('token')) {
      this.flag = true;
      this.user_icon = sessionStorage.getItem('UserIcon') || this.glo.user_icon;
    }else {
      this.flag = false;
    }
  }
}
