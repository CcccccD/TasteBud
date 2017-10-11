///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MenuServiceService {
  url= 'http://localhost:3000/menu';
  constructor(
    private http: HttpClient,
  ) {}


  getDetails(id, callback) {
   // console.log(id + '------------->Service');
    const headers = new HttpHeaders({ id : id });
    this.http.get(this.url + '/details', { headers: headers }).subscribe(function(result){
      callback(result);
    });
  }
  getSteps(id, callback){
    const headers = new HttpHeaders({ id : id });
    this.http.get(this.url + '/steps', { headers: headers }).subscribe(function(result){
      callback(result);
    });
  }
  getIndexMenus(callback) {
    this.http.get(this.url + '/indexmenu').subscribe(function(result){
    callback(result);
  });
}
  getIndexList(callback){
    this.http.get(this.url + '/indexlist').subscribe(function(result){
      callback(result);
    });
  }
  getIndexFashion(callback){
    this.http.get(this.url + '/indexlist').subscribe(function(result){
      callback(result);
    });
  }
  getMenuDetails(id, callback){
    // console.log(id+'service');
    const  headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/Menudetails', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }
  searchMenus(callback){//搜索
    // console.log('service');
    this.http.get(this.url + '/indexmenu').subscribe(function(result){
      callback(result);
    });
  }
  getMenuWorks(id, callback){
    const headers = new HttpHeaders({ id : id });
    this.http.get(this.url + '/Menuworks', { headers: headers }).subscribe(function(result){
      callback(result);
    });
  }

  getMenuLists(id, callback){
   // console.log(id);
    const headers = new HttpHeaders({ id : id });
    this.http.get(this.url + '/Menulists', { headers: headers }).subscribe(function(result){
      callback(result);
    });
  }

  getclssify(callback){
    this.http.get(this.url + '/classes').subscribe(function(result){
      callback(result);
    });
  }

  checkcollect(reciper_id, user_id, callback) {
    this.http.post(this.url + '/checkCollect', {'reciper_id': reciper_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  collectRecipe(reciper_id, user_id, callback) {
    this.http.post(this.url + '/collectReciper', {'reciper_id': reciper_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  uncollectRecipe(reciper_id, user_id, callback) {
    this.http.post(this.url + '/UncollectReciper', {'reciper_id': reciper_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  checkmenucollect (menu_id, user_id, callback) {
    this.http.post(this.url + '/ifCollectList', {'list_id': menu_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  collectMenu(menu_id, user_id, callback) {
    this.http.post(this.url + '/collectList', {'list_id': menu_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }
  uncollectMenu(menu_id, user_id, callback) {
    this.http.post(this.url + '/UncollectList', {'list_id': menu_id, 'user_id': user_id }).subscribe(function(result){
      callback(result);
    });
  }

  uploadMenu(formData, callback){

    this.http.post(this.url + '/UploadMenu', formData).subscribe(function(result){
      callback(result);
    });
  }

  delRfromL(recipe_id, list_id, callback) {
    const headers = new HttpHeaders({ recipe_id : recipe_id, list_id : list_id });
    this.http.post(this.url + '/deleteRfromList', { 'recipe_id' : recipe_id , 'list_id' : list_id }).subscribe(function(result){
      callback(result);
    });
  }

  addList(formData, callback) {
    this.http.post(this.url + '/addList', formData).subscribe(function(result){
      callback(result);
    });
  }

  addPersonalWorks(formData, callback) {
    this.http.post(this.url + '/addPersonalWork', formData).subscribe(function(result){
      callback(result);
    });
  }
  addMenu(recipeid, menuid, callback) {
    this.http.post(this.url + '/addRintoList', {'recipe_id': recipeid, 'list_id': menuid} ).subscribe(function(result){
      callback(result);
    });
  }

}
