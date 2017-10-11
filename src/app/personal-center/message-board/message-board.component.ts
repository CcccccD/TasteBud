import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../services/user-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css'],
  providers: [UserServiceService ]
})
export class MessageBoardComponent implements OnInit {

  _id: number;
  flag = false;
  deleteflag = true;
  index = 0;
  AllMessage: any;

  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.glo._val;
    if (val!= sessionStorage.getItem('ID')) {
      that.deleteflag = false;
    }
    that.userSer.getAllmessage(val, function (reslut) {
      if (reslut.length) {
        for (let i = 0; i < reslut.length; i++) {
          reslut[i].comment_date = new Date(reslut[i].comment_date).toLocaleDateString();
        }
        that.AllMessage = reslut;
        // console.log(reslut);
      } else {
        that.flag = true;
      }
      // console.log(that.flag);
    });
  }
  toSend(item) {
    const that = this;
    const val = that.glo._val;
   // console.log(val);
    const id = sessionStorage.getItem('ID');
    if(id){
      that.userSer.addComment(val, id, item, function(result){
        if (result.stageCode == 1){
          alert('留言成功！');
          that.userSer.getAllmessage(val, function (reslut) {
            if (reslut.length) {
              for (let i = 0; i < reslut.length; i++) {
                reslut[i].comment_date = new Date(reslut[i].comment_date).toLocaleDateString();
              }
              that.AllMessage = reslut;
              // console.log(reslut);
            } else {
              that.flag = true;
            }
          });
        }else {
          alert('留言失败！');
        }
        $('#message_textarea').val('');
      });
    }else{
      if(confirm("你还没有登录，是否去登录？")){
        that.router.navigate(['/login']);
      }
    }
    // location.reload();
}
  delComment(index) {
    console.log(index);
    if(confirm( "是否确认删除？" )){
      const that = this;
      const val = that.glo._val;
      that._id = that.AllMessage[index].id;
      console.log(that._id);
      // console.log(typeof (that._id));
      that.userSer.sendId(that._id, function (result) {
        // console.log(result);
        if (result.stageCode == 1) {
          that.userSer.getAllmessage(val, function (reslut) {
            if (reslut.length) {
              for (let i = 0; i < reslut.length; i++) {
                reslut[i].comment_date = new Date(reslut[i].comment_date).toLocaleDateString();
              }
              that.AllMessage = reslut;
              // console.log(reslut);
            } else {
              that.flag = true;
            }
            // console.log(that.flag);
          });
        }else {
        }
      });
      // location.reload();
    }else {
      return false;
    }
  }

}
