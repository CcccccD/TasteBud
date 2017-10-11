import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu-fashion',
  templateUrl: './menu-fashion.component.html',
  styleUrls: ['./menu-fashion.component.css'],
  providers: [MenuServiceService]
})
export class MenuFashionComponent implements OnInit {
  IndexFashion: any;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router
  ){

  }


  ngOnInit() {
    const  that = this;
    that.MenuD.getIndexFashion(function(result){
      if (result) {
        that. IndexFashion = result;
      }else {
        that.router.navigate(['/login']);
      }
    });

  }

}
