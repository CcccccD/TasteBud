import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserServiceService]
})
export class UserComponent implements OnInit {
  IndexUsers:any;
  searchText:string;
  constructor(
    private route: ActivatedRoute,
    private userSer: UserServiceService,
    private router: Router,
    private glo: GlobalPropertyService,
  ) { }

  ngOnInit() {
    this.searchText=this.glo._searchText;
    const that = this;
    that.userSer.getIndexUsers(function(result){
      /*console.log('1111');*/
      if (result) {
        that.IndexUsers = result;
      }else {
        that.router.navigate(['/login']);
      }
      // console.log(that.IndexUsers);
    });
  }
  ngAfterContentChecked() {

    this.searchText=this.glo._searchText;

    // console.log(this.glo._searchText);
    //  console.log(this.searchText);
  }


}
