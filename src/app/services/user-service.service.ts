import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {
  url= 'http://localhost:3000/users';
  constructor(
    private http: HttpClient,
  ) {}


  login(user, callback){
    this.http.post(this.url + '/login', user).subscribe(function(result){
      callback(result);
    });
  }

  getCodeByphone(phone, callback){
    this.http.post(this.url + '/code', phone).subscribe(function(result){
      callback(result);
    });
  }

  register(user, callback){
    this.http.post(this.url + '/regist', user).subscribe(function(result){
      callback(result);
    });
  }

  getInfo (id, callback) {
    const headers = new HttpHeaders({ id : id });
    this.http.get(this.url + '/info', { headers: headers }).subscribe(function(result){
      callback(result);
    });
  }
  getMenu(id, callback){
    const  headers = new  HttpHeaders({id: id});
    this.http.get(this.url + '/menus', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }
  getMenuGather(id, callback){
      const  headers = new HttpHeaders({id: id});
      this.http.get(this.url + '/personallists', {headers: headers}).subscribe(function (result) {
        callback(result);
      });
    }
  getIndexUsers(callback){

    this.http.get(this.url + '/recommend').subscribe(function(result){
      callback(result);
    });
  }
  getPersonalWoks(id, callback){
    const  headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/works', {headers: headers}).subscribe(function(result){
      callback(result);
    });
  }

  addComment(master_id, commenter_id, content, callback) {
    this.http.post(this.url + '/addcomment', {'master_id': master_id, 'commenter_id': commenter_id, 'content': content }).subscribe(function(result){
      callback(result);
    });
  }

  getAllmessage(id, callback){
    const  headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/comments', {headers: headers}).subscribe(function(result){
      callback(result);
    });
  }
  sendId(id, callback) {
   // console.log(id );
    this.http.post(this.url + '/delcomment', {'id': id}).subscribe(function(result){
      callback(result);
    });
  }

  getCollectRecipes(id, callback){
    const  headers = new  HttpHeaders({id: id});
    this.http.get(this.url + '/collect_recipes', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }
  getFavorite(id, callback){
    const  headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/collect_lists', {headers: headers}).subscribe(function(result){
      callback(result);
    });
  }
  getFollowBe(id, callback){
    const  headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/Befollowed', {headers: headers}).subscribe(function(result){
      callback(result);
    });
  }
  getFollowGo(id, callback) {
    const headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/follow', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }
  getUnfollowUsers(id, callback){
    const headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/UnfollowUsers', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }

  checkFollow(follower_id, user_id, callback) {
    this.http.post(this.url + '/checkFollow', {'follower_id': follower_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  followUser(follower_id, user_id, callback) {
    this.http.post(this.url + '/followUser', {'follower_id': follower_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  unfollowUser(follower_id, user_id, callback) {
    this.http.post(this.url + '/UnfollowUser', {'follower_id': follower_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  checkThumb(work_id, user_id, callback) {
    this.http.post(this.url + '/checkThumb', {'work_id': work_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  thumbWork(work_id, user_id, callback) {
    this.http.post(this.url + '/thumbWork', {'work_id': work_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  unthumbWork(work_id, user_id, callback) {
    this.http.post(this.url + '/UnthumbWork', {'work_id': work_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  getBasicInfo(id, token, callback) {
    const headers = new HttpHeaders({id: id , token : token});
    this.http.get(this.url + '/BasicInfo', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }
  updateInfo(formData, callback){

    this.http.post(this.url + '/UpdateInfo', formData).subscribe(function(result){
      callback(result);
    });
  }

  getReCodeByphone(phone, callback) {
    this.http.post(this.url + '/Resetcode', phone).subscribe(function(result){
      callback(result);
    });
  }
//修改密码
  retrieve(user, callback) {
    this.http.post(this.url + '/ResetPssword', user).subscribe(function(result){
      callback(result);
    });
  }

  delWork(id, callback) {
    // console.log(id );
    this.http.post(this.url + '/delPersonalWork', {'id': id}).subscribe(function(result){
      callback(result);
    });
  }

}
