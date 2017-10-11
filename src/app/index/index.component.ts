import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   _stext:string;
  constructor(
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  jump(e){
    this._stext = e.target.innerHTML;
    this.glo._searchText = this._stext;
    this.router.navigate(['/search']);
  }

}
