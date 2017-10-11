import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './../../services/global-property.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tabs=['热门','最新'];
  tab_index=0;
  constructor(
    private glo: GlobalPropertyService,
  ) { }

  ngOnInit() {
    // console.log(this.glo._searchText);
  }

}
