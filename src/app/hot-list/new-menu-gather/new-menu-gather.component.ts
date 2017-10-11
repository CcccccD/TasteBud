import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-menu-gather',
  templateUrl: './new-menu-gather.component.html',
  styleUrls: ['./new-menu-gather.component.css'],
  providers: [MenuServiceService]
})
export class NewMenuGatherComponent implements OnInit {

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
