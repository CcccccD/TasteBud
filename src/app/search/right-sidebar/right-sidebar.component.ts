import { Component, OnInit } from '@angular/core';
import {RouterModule} from  "@angular/router";
@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  providers: [RouterModule]
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
