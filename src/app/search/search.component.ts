import { Component, OnInit , Input} from '@angular/core';
import {GlobalPropertyService} from './../services/global-property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private glo: GlobalPropertyService,
  ) { }
  ngOnInit() {
    if(sessionStorage.getItem('text')){
      this.glo._searchText = sessionStorage.getItem('text');
    }
  }
  ngOnDestroy(){
    sessionStorage.removeItem('text');
  }
}
