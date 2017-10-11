import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css'],
  providers: [MenuServiceService]
})
export class NewMenuComponent implements OnInit {

  AllMenus:any;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenus(function(result){
      that.AllMenus = result;
    });
  }
}
