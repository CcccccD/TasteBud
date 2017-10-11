import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
@Injectable()
export class InfoServiceService {
  url= 'http://localhost:3000/info';
  constructor(
    private http: HttpClient,
  ) { }

  getProvinces(callback){
    this.http.get(this.url + '/provinces').subscribe(function(result){
      callback(result);
    });
  }


  getSocialUpdate(id, callback) {
    const headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/social_update', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }

  getSocialUpdateL(id, callback) {
    const headers = new HttpHeaders({id: id});
    this.http.get(this.url + '/getFollowers', {headers: headers}).subscribe(function (result) {
      callback(result);
    });
  }

}
