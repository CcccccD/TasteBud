import { Component, OnInit } from '@angular/core';
import {InfoServiceService} from './../services/info-service.service';
import {GlobalPropertyService} from './../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  providers: [InfoServiceService]
})
export class DynamicComponent implements OnInit {
  Allupdatel: any;
  Allupdate: any;
  flag= false;
  constructor(
    private infoSer: InfoServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
   // console.log(val);
    that.infoSer.getSocialUpdate(val, function (reslut) {
    //  console.log(reslut);
      if (reslut.length) {
        that.Allupdate = reslut;
      }else {
        that.flag = true;
      }
    //  console.log(that.flag);
    });
    that.infoSer. getSocialUpdateL(val, function (reslut) {
      // console.log(reslut);
      if (reslut.length) {
        that.Allupdatel = reslut;
      } else{
        that.flag = true;
      }
      // console.log(that.flag);
    });
  }
}
