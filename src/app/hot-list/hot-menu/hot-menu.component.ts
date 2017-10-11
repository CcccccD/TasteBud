import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hot-menu',
  templateUrl: './hot-menu.component.html',
  styleUrls: ['./hot-menu.component.css'],
  providers: [MenuServiceService]
})
export class HotMenuComponent implements OnInit {

  AllMenus:any;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router
  ) { }
  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenus(function(result){
        that.AllMenus = result;
    });
  }

}
