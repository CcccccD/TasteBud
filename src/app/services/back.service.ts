import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Injectable()
export class BackService {
  url= 'http://10.40.4.3:3000/back';
  constructor(
    private http: HttpClient,
  ) { }

  getAllmessage(callback){
    this.http.get(this.url + '/allComments').subscribe(function(result){
      callback(result);
      // console.log(result);
    });
  }

  getAllrecipes(callback){
    this.http.get(this.url + '/allRecipes').subscribe(function(result){
      callback(result);
      // console.log(result);
    });
  }

  delComment(id,callback){
    this.http.post(this.url + '/delComment',  { 'id': id }).subscribe(function (result) {
     callback(result);
     });
  }

  delRecipe(id,callback){
    this.http.post(this.url + '/delRecipe',  { 'id': id }).subscribe(function (result) {
      callback(result);
    });
  }
  adminLogin(admin,callback){
    this.http.post(this.url + '/adminLogin',admin).subscribe(function (result) {
      callback(result);
    });
  }
}
