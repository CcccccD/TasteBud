import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hot-menu-gather',
  templateUrl: './hot-menu-gather.component.html',
  styleUrls: ['./hot-menu-gather.component.css'],
  providers: [MenuServiceService]
})
export class HotMenuGatherComponent implements OnInit {

  Alllists:any;

  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const that = this;
    that.MenuD.getIndexList(function(result){
      that.Alllists = result;
    });
  }

}
