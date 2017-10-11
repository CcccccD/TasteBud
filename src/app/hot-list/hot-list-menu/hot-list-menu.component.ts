import {Component, OnInit} from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hot-list-menu',
  templateUrl: './hot-list-menu.component.html',
  styleUrls: ['./hot-list-menu.component.css'],
  providers: [MenuServiceService]

})
export class HotListMenuComponent implements OnInit {

  AllMenus: any;

  constructor(private route: ActivatedRoute,
              private MenuD: MenuServiceService,
              private router: Router) {

  }

  ngOnInit() {
    const that = this;
    that.MenuD.getIndexMenus(function (result) {
      that.AllMenus = result;
    });

  }
}
