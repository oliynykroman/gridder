import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  createUrl(endPoint, requestBody): string {
    let url = environment.apiDomain + '/' + endPoint + requestBody;
    return url;
  }
  login(username: string, password: string) {
    let test = this.http.get(this.createUrl('user', '?login=' + username + '&password=' + password));
    return test;
  }

}
